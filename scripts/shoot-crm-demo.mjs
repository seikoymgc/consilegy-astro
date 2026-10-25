import { createRequire } from 'module'
import fs from 'fs'
const req = createRequire('/Users/seikoyamaguchi/Claude/crm/package.json')
const { createClient } = req('@supabase/supabase-js')
const { createServerClient } = req('@supabase/ssr')
const { chromium } = createRequire('/Users/seikoyamaguchi/Claude/consilegy-astro/package.json')('playwright-core')
for (const l of fs.readFileSync('/Users/seikoyamaguchi/Claude/crm/.env.local','utf8').split('\n')) { const m = l.match(/^([A-Z_]+)=(.*)$/); if (m) process.env[m[1]] ??= m[2].replace(/^"|"$/g,'') }
const URL_ = process.env.NEXT_PUBLIC_SUPABASE_URL, ANON = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY, SR = process.env.SUPABASE_SERVICE_ROLE_KEY
const admin = createClient(URL_, SR, { auth: { persistSession: false } })
const email = 'demo@consilegy.com'
const { data: u } = await admin.auth.admin.listUsers({ perPage: 1000 })
const uid = u.users.find(x => x.email === email).id
const { data: before } = await admin.from('user_active_org').select('*').eq('user_id', uid).maybeSingle()
const { data: link } = await admin.auth.admin.generateLink({ type: 'magiclink', email })
const anon = createClient(URL_, ANON, { auth: { persistSession: false } })
const { data: v, error: ve } = await anon.auth.verifyOtp({ token_hash: link.properties.hashed_token, type: 'magiclink' })
if (ve) throw ve
const jar = {}
const ssr = createServerClient(URL_, ANON, { cookies: { getAll: () => Object.entries(jar).map(([name, value]) => ({ name, value })), setAll: cs => cs.forEach(c => { jar[c.name] = c.value }) } })
await ssr.auth.setSession({ access_token: v.session.access_token, refresh_token: v.session.refresh_token })
const OUT = process.argv[2]
const browser = await chromium.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: true })
try {
  for (const [lang, ws] of [['ja', 'demo-school'], ['en', 'demo-school-en']]) {
    const ctx = await browser.newContext({ viewport: { width: 1456, height: 822 }, deviceScaleFactor: 1, locale: lang === 'ja' ? 'ja-JP' : 'en-US' })
    const base = { domain: 'crm.consilegy.com', path: '/', secure: true }
    await ctx.addCookies([...Object.entries(jar).map(([name, value]) => ({ name, value, ...base })), { name: 'crm_ws', value: ws, ...base }, { name: 'school_lang', value: lang, ...base }])
    const page = await ctx.newPage()
    await page.goto('https://crm.consilegy.com/school', { waitUntil: 'networkidle' })
    await page.evaluate(() => window.go && window.go('schedule'))
    await page.waitForTimeout(1500)
    const H = await page.evaluate(() => Math.round(document.querySelector('#calMonths').getBoundingClientRect().bottom + 20))
    const clip = { x: 0, y: 0, width: 1456, height: Math.min(822, H) }
    await page.screenshot({ path: `${OUT}/${lang}-1.png`, clip })
    const chip = page.locator('[data-cal-coach]').nth(2)
    await chip.click(); await page.waitForTimeout(500)
    await page.screenshot({ path: `${OUT}/${lang}-2.png`, clip })
    console.log(lang, 'chip', await chip.textContent())
    await page.locator('[data-cal-coach=""]').click(); await page.waitForTimeout(300)
    await page.locator('.cal-m[style*="block"] .cal-ev').first().click(); await page.waitForTimeout(2500)
    await page.screenshot({ path: `${OUT}/${lang}-3.png` })
    console.log(lang, 'after click', page.url())
    await ctx.close()
  }
} finally {
  await browser.close()
  await ssr.auth.signOut({ scope: 'local' })
  const { data: after } = await admin.from('user_active_org').select('*').eq('user_id', uid).maybeSingle()
  if (before && JSON.stringify(before) !== JSON.stringify(after)) { await admin.from('user_active_org').upsert(before); console.log('restored active org') }
  else console.log('active org unchanged')
}
