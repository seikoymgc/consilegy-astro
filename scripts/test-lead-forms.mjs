// No requests leave this test: exercise the shipped inline scripts in a VM.
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import test from 'node:test';

const analytics = readFileSync(new URL('../src/components/Analytics.astro', import.meta.url), 'utf8').match(/<script is:inline>([\s\S]*?)<\/script>/)[1];
const contact = readFileSync(new URL('../src/components/ContactForm.astro', import.meta.url), 'utf8').match(/<script is:inline>([\s\S]*?)<\/script>/)[1];
const meta = { name: 'contact', kind: 'reference', event: 'contact_submit' };
const success = () => ({ ok: true, json: async () => ({ ok: true, contact_id: 'test-contact' }) });
function setup(fetchImpl = async () => success(), blockedStorage = false) {
  const events = {}, timers = new Map(), dataLayer = [];
  const window = { dataLayer };
  Object.defineProperty(window, 'sessionStorage', { get() { if (blockedStorage) throw new Error('blocked'); return { getItem() { return ''; }, setItem() {} }; } });
  const document = { referrer: '', addEventListener(name, fn) { events[name] = fn; } };
  const context = vm.createContext({ window, document, location: { pathname: '/contact/', origin: 'https://consilegy.com', href: 'https://consilegy.com/contact/', search: '' }, fetch: fetchImpl, URL, URLSearchParams, WeakSet, setTimeout(fn) { const id = timers.size + 1; timers.set(id, fn); return id; }, clearTimeout(id) { timers.delete(id); } });
  vm.runInContext(analytics, context);
  return { window, document, context, events, timers, dataLayer, names: () => dataLayer.filter(x => x.event).map(x => x.event) };
}

test('accepted receipt emits one completion, without personal data', async () => {
  let options;
  const app = setup(async (_, input) => { options = input; return success(); });
  await app.window.cslgSubmitForm('/test', { mode: 'no-cors', body: JSON.stringify({ email: 'private@example.test', message: 'private text' }) }, meta);
  assert.equal(options.mode, 'cors');
  assert.deepEqual(app.names(), ['lead_form_attempt', 'contact_submit']);
  assert.equal(app.timers.size, 0);
  assert.doesNotMatch(JSON.stringify(app.dataLayer), /private|test-contact/);
  assert.equal(app.dataLayer.filter(x => x[0] === 'event' && x[1] === 'contact_submit').length, 0, 'GTM owns the existing completion event');
  assert.equal(app.dataLayer.filter(x => x[0] === 'event' && x[1] === 'lead_form_attempt').length, 1);
});

for (const [name, fetchImpl] of [
  ['HTTP failure', async () => ({ ok: false, status: 500 })],
  ['rate limit', async () => ({ ok: false, status: 429 })],
  ['network failure', async () => { throw new Error('offline'); }],
  ['invalid JSON', async () => ({ ok: true, json: async () => { throw new Error('invalid'); } })],
  ['missing contact', async () => ({ ok: true, json: async () => ({ ok: true, contact_id: null }) })],
  ['negative receipt', async () => ({ ok: true, json: async () => ({ ok: false, contact_id: 'id' }) })],
]) test(name + ' never counts as success', async () => {
  const app = setup(fetchImpl);
  await assert.rejects(app.window.cslgSubmitForm('/test', {}, meta));
  assert.deepEqual(app.names(), ['lead_form_attempt', 'lead_form_error']);
  assert.equal(app.timers.size, 0);
});

for (const stage of ['headers', 'body']) test('timeout during ' + stage + ' does not count a late receipt', async () => {
  let resolve;
  const pending = new Promise(r => { resolve = r; });
  const app = setup(() => stage === 'headers' ? pending : Promise.resolve({ ok: true, json: () => pending }));
  const sending = app.window.cslgSubmitForm('/test', {}, meta);
  const rejected = assert.rejects(sending);
  for (const fn of app.timers.values()) fn();
  await rejected;
  resolve(stage === 'headers' ? success() : { ok: true, contact_id: 'late' });
  await new Promise(r => setImmediate(r));
  assert.deepEqual(app.names(), ['lead_form_attempt', 'lead_form_error']);
});

test('blocked storage does not stop submission', async () => {
  const app = setup(undefined, true);
  await app.window.cslgSubmitForm('/test', {}, meta);
  assert.ok(app.names().includes('contact_submit'));
});

test('input starts once per form and consultation click is not a booking', () => {
  const app = setup();
  const form = { dataset: { formName: 'contact' } };
  const focus = { target: { closest: () => form } };
  app.events.focusin(focus); app.events.focusin(focus);
  app.events.click({ target: { closest: () => ({ href: 'https://consilegy.com/free-consultation/' }) } });
  assert.deepEqual(app.names(), ['lead_form_start', 'consultation_cta_click']);
});

async function contactUI(fetchImpl) {
  const app = setup(fetchImpl);
  const button = { disabled: false, textContent: 'Send', dataset: {} };
  const error = { hidden: true }, done = { hidden: true };
  const fields = ['company_name', 'last_name', 'first_name', 'email', 'message'].map(name => ({ name, required: true }));
  const values = { company_name: 'Test', last_name: 'Test', first_name: 'Test', email: 'test@example.test', message: 'Test only' };
  const handlers = {};
  const form = { hidden: false, querySelector: () => button, querySelectorAll: () => fields, addEventListener: (name, fn) => { handlers[name] = fn; } };
  const root = { dataset: { submitUrl: '/test', sending: 'Sending', failed: 'Unconfirmed' }, querySelector: selector => selector === 'form' ? form : selector === '.cf-error' ? error : done };
  app.document.querySelectorAll = () => [root];
  app.context.FormData = class { get(name) { return values[name] || ''; } };
  vm.runInContext(contact, app.context);
  const submit = () => handlers.submit({ preventDefault() {} });
  submit(); submit();
  await new Promise(r => setImmediate(r));
  return { ...app, button, error, done, form };
}

test('contact UI only completes after receipt and blocks double clicks', async () => {
  let calls = 0;
  const app = await contactUI(async () => { calls++; return success(); });
  assert.equal(calls, 1);
  assert.equal(app.form.hidden, true);
  assert.equal(app.done.hidden, false);
  assert.equal(app.error.hidden, true);
});

test('contact UI preserves input on failure', async () => {
  const app = await contactUI(async () => ({ ok: false, status: 503 }));
  assert.equal(app.form.hidden, false);
  assert.equal(app.done.hidden, true);
  assert.equal(app.error.hidden, false);
  assert.equal(app.button.disabled, false);
});

test('telemetry failure cannot block accepted submission', async () => {
  const app = setup();
  app.dataLayer.push = () => { throw new Error('analytics unavailable'); };
  await app.window.cslgSubmitForm('/test', {}, meta);
});
