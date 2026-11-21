#!/usr/bin/env python3
"""Inventory built canonical articles and resume real Claude reviews from a disk queue."""
import argparse, concurrent.futures, fcntl, hashlib, json, re, subprocess, sys, threading, time
from datetime import datetime, timezone
from html import escape
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urljoin, urlparse, unquote

ROOT=Path(__file__).resolve().parents[1]
VOID={'area','base','br','col','embed','hr','img','input','link','meta','param','source','track','wbr'}
class Node:
 def __init__(self,tag='',attrs=None): self.tag=tag;self.attrs=dict(attrs or []);self.children=[]
class DOM(HTMLParser):
 def __init__(self):super().__init__();self.root=Node();self.stack=[self.root]
 def handle_starttag(self,t,a):
  n=Node(t,a);self.stack[-1].children.append(n)
  if t not in VOID:self.stack.append(n)
 def handle_startendtag(self,t,a):self.handle_starttag(t,a);self.handle_endtag(t)
 def handle_endtag(self,t):
  for i in range(len(self.stack)-1,0,-1):
   if self.stack[i].tag==t:self.stack=self.stack[:i];break
 def handle_data(self,s):self.stack[-1].children.append(s)
def nodes(n):
 if isinstance(n,str):return
 yield n
 for c in n.children:yield from nodes(c)
def plain(n):return n if isinstance(n,str) else ''.join(plain(c) for c in n.children)
def article_schema(x):
 if isinstance(x,list):
  for y in x:yield from article_schema(y)
 elif isinstance(x,dict):
  t=x.get('@type',[]);t=[t] if isinstance(t,str) else t
  if set(t)&{'Article','BlogPosting','NewsArticle'} and x.get('headline'):yield x
  if '@graph' in x:yield from article_schema(x['@graph'])
def md(n,url):
 if isinstance(n,str):return n
 t=n.tag;a=n.attrs;classes=a.get('class','')
 if t in {'script','style','nav','footer'}:return ''
 if t=='aside' and any(x in classes for x in ['journal-rail','article-related','author','publisher']):return ''
 s=''.join(md(c,url) for c in n.children)
 if t=='a':return '['+s.strip()+']('+urljoin(url,a.get('href',''))+')'
 if t=='img':return '\n!['+(a.get('alt') or '')+']('+urljoin(url,(a.get('src') or ''))+')\n'
 if t=='h1':return ''
 if re.fullmatch('h[1-6]',t):return '\n\n'+'#'*int(t[1])+' '+s.strip()+'\n\n'
 if t=='li':return '\n- '+s.strip()
 if t=='br':return '\n'
 if t in {'strong','b'}:return '**'+s+'**'
 if t in {'table','thead','tbody','tr','th','td'}:return f'<{t}>'+s+f'</{t}>'
 if t in {'p','div','section','article','header','aside','ul','ol','figure','blockquote'}:return '\n\n'+s.strip()+'\n\n'
 return s

def write_json(path,value):
 tmp=path.with_suffix('.tmp');tmp.write_text(json.dumps(value,ensure_ascii=False,indent=2));tmp.replace(path)
def sha(data):return hashlib.sha256(data).hexdigest()
def source_paths(snapshot,site,path):
 parts=path.strip('/').split('/');en=parts[0]=='en'
 choices=[]
 if site=='media':
  slug=parts[-1];choices=[f'media/src/content/{"notes-en" if en else "notes"}/{slug}.md']
 else:
  choices=[f'src/pages/{path.strip("/")}/index.astro',f'src/pages/{path.strip("/")}.astro']
  if '/crm/media/' in path:choices += [f'src/content/crm-media/{"en" if en else "ja"}/{parts[-1]}.md']
  if '/case-studies/' in path:choices += [f'src/content/case-studies/{parts[-1]}.md']
  if len(parts)>=2:choices += [f'src/content/blog/{parts[-1]}.md']
 return [p for p in choices if (snapshot/p).exists()]

def inventory(snapshot,out):
 out.mkdir(parents=True,exist_ok=False);(out/'inputs').mkdir()
 rev=subprocess.check_output(['git','rev-parse','HEAD'],cwd=snapshot,text=True).strip()
 entries={}
 for site,folder,host in [('root',snapshot/'dist','https://consilegy.com'),('media',snapshot/'media/dist','https://media.consilegy.com')]:
  if not (folder/'index.html').exists():raise ValueError('Both site builds must be completed')
  for p in folder.rglob('*.html'):
   d=DOM();raw=p.read_bytes();d.feed(raw.decode('utf-8'));allnodes=list(nodes(d.root))
   canonical=next((n.attrs.get('href') for n in allnodes if n.tag=='link' and n.attrs.get('rel')=='canonical'),None)
   if not canonical:continue
   path=urlparse(canonical).path
   expected='/'+str(p.relative_to(folder)).replace('index.html','').removesuffix('.html')
   if unquote(expected).rstrip('/')!=unquote(path).rstrip('/'):continue
   if site=='root' and (path in ['/crm/','/en/crm/'] or path.startswith(('/services/','/en/services/'))):continue
   schemas=[]
   for n in allnodes:
    if n.tag=='script' and n.attrs.get('type')=='application/ld+json':
     try:schemas.extend(article_schema(json.loads(plain(n))))
     except ValueError:pass
   if not schemas:
    og_article=any(n.tag=='meta' and n.attrs.get('property')=='og:type' and n.attrs.get('content')=='article' for n in allnodes)
    h1=next((n for n in allnodes if n.tag=='h1'),None)
    if not og_article or h1 is None or not any(n.tag=='article' for n in allnodes):continue
    schemas=[{'headline':plain(h1),'url':canonical,'@type':'Article schema missing','inLanguage':'en' if path.startswith('/en/') else 'ja'}]
   schema=next((s for s in schemas if s.get('url',canonical).rstrip('/')==canonical.rstrip('/')),None)
   if not schema:continue
   article=next((n for n in allnodes if n.tag=='article'),None)
   if article is None:article=next((n for n in allnodes if n.tag=='main'),None)
   if article is None:continue
   title=schema['headline'];body=md(article,canonical)
   body=re.sub(r'^\s*# '+re.escape(title)+r'\s*','',body,count=1)
   body=re.sub(r'\n{3,}','\n\n',body).strip()
   if not body:continue
   ident=sha(canonical.encode())[:16];input_path=out/'inputs'/f'{ident}.md'
   metadata={'url':canonical,'lang':schema.get('inLanguage','en' if path.startswith('/en/') else 'ja'),'datePublished':schema.get('datePublished'),'dateModified':schema.get('dateModified'),'author':schema.get('author'),'h1_count':sum(n.tag=='h1' for n in allnodes),'h1_text':[plain(n) for n in allnodes if n.tag=='h1'],'schema_type':schema.get('@type'),'robots':[n.attrs.get('content') for n in allnodes if n.tag=='meta' and n.attrs.get('name')=='robots']}
   text='---\n監査用メタデータ: '+json.dumps(metadata,ensure_ascii=False)+'\n---\n\n# '+title+'\n\n'+body+'\n'
   input_path.write_text(text)
   entries[canonical]={'id':ident,'url':canonical,'title':title,'site':site,'lang':metadata['lang'],'source_paths':source_paths(snapshot,site,path),'input':str(input_path.resolve()),'sha256':sha(text.encode()),'html':str(p),'html_sha256':sha(raw),'snapshot_revision':rev}
 ordered=sorted(entries.values(),key=lambda e:(0 if any(x in e['url'] for x in ['sfa-ranking/','crm-comparison/']) else 1,e['site'],e['url']))
 write_json(out/'manifest.json',{'revision':rev,'snapshot':str(snapshot),'created_at':datetime.now(timezone.utc).isoformat(),'entries':ordered})
 write_json(out/'state.json',{'jobs':{e['id']:{'status':'pending','url':e['url']} for e in ordered}})
 (out/'context.md').write_text('''# 公開済み記事の全件監査\n\nユーザーの2026-11-20指示：公開済みの記事全部を同じようにClaudeでチェックし、Codexが通常の修正・更新・再審査まで進める。これはビルドした公開版の記事本文とメタデータのスナップショット。元のHTML・参照画像のURL・対応ソースはmanifest.jsonで追跡する。公開済みという事実を、本人の監修・人による審査・出典検証の証拠にしない。監査用メタデータは記事本文ではなく、見出し・目次や署名などのUIも本文の主張と区別する。画像の実際の見え方や本番反映は別の確認が必要。根拠不足や本人の新しい体験を創作しない。\n\n英語記事は英語の品質と、日本市場を対象とする問いの妥当性を審査し、日本語だけの表記項目は理由付きの該当なしにする。修正提案で英語記事を日本語に翻訳しない。\n''')
 print(json.dumps({'articles':len(ordered),'root':sum(e['site']=='root' for e in ordered),'media':sum(e['site']=='media' for e in ordered),'manifest':str(out/'manifest.json')},ensure_ascii=False))

def effective_state(out):
 data=json.loads((out/'state.json').read_text())
 ledger=out/'corrections.jsonl'
 if ledger.exists():
  for line in ledger.read_text().splitlines():
   event=json.loads(line)
   if event['id'] in data['jobs']:data['jobs'][event['id']].update(event)
 return data

def run(out,limit,workers):
 manifest=json.loads((out/'manifest.json').read_text());state_path=out/'state.json'
 with (out/'run.lock').open('w') as lock:
  fcntl.flock(lock,fcntl.LOCK_EX|fcntl.LOCK_NB)
  state=effective_state(out);guard=threading.Lock();stop=threading.Event();counter=[0]
  jobs=[e for e in manifest['entries'] if state['jobs'][e['id']]['status'] in ['pending','running'] or (state['jobs'][e['id']]['status']=='blocked_review' and (state['jobs'][e['id']].get('attempts',0)<3 or re.search(r'API Error|Claude終了コード|TimeoutExpired|timed out',state['jobs'][e['id']].get('error',''),re.I)))]
  if limit:jobs=jobs[:limit]
  def task(entry):
   if stop.is_set():return
   ident=entry['id'];review=out/'reports'/ident
   with guard:
    counter[0]+=1;state['jobs'][ident].update(status='running',report=str(review/'report.json'),attempts=state['jobs'][ident].get('attempts',0)+1);write_json(state_path,state)
   cmd=[sys.executable,str(ROOT/'scripts/claude-article-review.py'),entry['input'],'--evidence',str(out/'context.md'),'--output',str(review)]
   if (review/'report.json').exists():cmd.append('--resume')
   try:
    with (out/f'{ident}.log').open('a') as log:subprocess.run(cmd,stdout=log,stderr=subprocess.STDOUT,check=False)
    report=json.loads((review/'report.json').read_text())
    findings=[{'phase':n,**f} for n,p in report['phases'].items() for f in p['review']['findings']]
    major=[f for f in findings if f['severity'] in ['Critical','Major']]
    unmapped=[]
    for phase in report['phases'].values():
     r=phase['review']
     unmapped.extend(c['id'] for c in r['assessments'] if c['status']=='問題あり' and not any(f['id']==c['id'] or f['id'] in re.findall(r'[A-Z]\d+',c['reason']) for f in r['findings']))
    if not report['completed']:
     status='blocked_review'
     if re.search(r'API Error|Claude終了コード|TimeoutExpired|timed out|ログイン|見つかりません', report.get('error',''), re.I):stop.set()
    elif major or unmapped:status='needs_repair'
    elif report['ai_clear']:status='ai_clear'
    else:status='needs_verification'
    with guard:state['jobs'][ident].update(status=status,major_count=len(major),unmapped_checks=unmapped,review_completed=report['completed'],error=report.get('error'),finished_at=datetime.now(timezone.utc).isoformat());write_json(state_path,state)
   except Exception as exc:
    with guard:state['jobs'][ident].update(status='blocked_review',error=str(exc));write_json(state_path,state)
    stop.set()
  with concurrent.futures.ThreadPoolExecutor(max_workers=workers) as pool:list(pool.map(task,jobs))
  counts={}
  for v in state['jobs'].values():counts[v['status']]=counts.get(v['status'],0)+1
  print(json.dumps(counts,ensure_ascii=False))

def worker_active(out):
 if not (out/'run.lock').exists():return False
 with (out/'run.lock').open('r+') as lock:
  try:fcntl.flock(lock,fcntl.LOCK_EX|fcntl.LOCK_NB);fcntl.flock(lock,fcntl.LOCK_UN);return False
  except BlockingIOError:return True

def supervise(out,workers):
 with (out/'supervisor.lock').open('w') as lock:
  fcntl.flock(lock,fcntl.LOCK_EX|fcntl.LOCK_NB)
  delay=60
  while True:
   if worker_active(out):time.sleep(30);continue
   jobs=effective_state(out)['jobs']
   pending=[v for v in jobs.values() if v['status'] in ['pending','running'] or (v['status']=='blocked_review' and (v.get('attempts',0)<3 or re.search(r'API Error|Claude終了コード|TimeoutExpired|timed out',v.get('error',''),re.I)))]
   if not pending:
    write_json(out/'supervisor-status.json',{'status':'audit_queue_exhausted','note':'審査の待ち行列が終了。修正・再審査・本番反映の完了とは別。','at':datetime.now(timezone.utc).isoformat()});return
   write_json(out/'supervisor-status.json',{'status':'running','remaining_audits':len(pending),'at':datetime.now(timezone.utc).isoformat()})
   result=subprocess.run([sys.executable,str(Path(__file__).resolve()),'run','--queue',str(out),'--workers',str(workers)],check=False)
   write_json(out/'supervisor-status.json',{'status':'waiting_to_resume','last_exit_code':result.returncode,'retry_delay_seconds':delay,'at':datetime.now(timezone.utc).isoformat()})
   time.sleep(delay);delay=min(delay*2,900)

def main():
 p=argparse.ArgumentParser(description=__doc__);s=p.add_subparsers(dest='mode',required=True)
 i=s.add_parser('inventory');i.add_argument('--snapshot',type=Path,required=True);i.add_argument('--output',type=Path,required=True)
 t=s.add_parser('status');t.add_argument('--queue',type=Path,required=True)
 u=s.add_parser('supervise');u.add_argument('--queue',type=Path,required=True);u.add_argument('--workers',type=int,choices=[1,2],default=2)
 r=s.add_parser('run');r.add_argument('--queue',type=Path,required=True);r.add_argument('--limit',type=int,default=0);r.add_argument('--workers',type=int,choices=[1,2],default=1)
 a=p.parse_args()
 if a.mode=='inventory':inventory(a.snapshot.resolve(),a.output.resolve())
 elif a.mode=='status':
  q=a.queue.resolve();data=effective_state(q);counts={}
  for job in data['jobs'].values():counts[job['status']]=counts.get(job['status'],0)+1
  active=False
  if (q/'run.lock').exists():
   with (q/'run.lock').open('r+') as lock:
    try:fcntl.flock(lock,fcntl.LOCK_EX|fcntl.LOCK_NB);fcntl.flock(lock,fcntl.LOCK_UN)
    except BlockingIOError:active=True
  print(json.dumps({'active':active,'counts':counts},ensure_ascii=False))
 elif a.mode=='supervise':supervise(a.queue.resolve(),a.workers)
 else:run(a.queue.resolve(),a.limit,a.workers)
if __name__=='__main__':main()
