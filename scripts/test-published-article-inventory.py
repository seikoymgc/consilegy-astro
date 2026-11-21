import importlib.util,json,subprocess,tempfile,unittest
from pathlib import Path
spec=importlib.util.spec_from_file_location('audit',Path(__file__).with_name('review-published-articles.py'));m=importlib.util.module_from_spec(spec);spec.loader.exec_module(m)
class InventoryTest(unittest.TestCase):
 def test_canonical_noindex_missing_schema_and_duplicate_h1(self):
  with tempfile.TemporaryDirectory() as tmp:
   root=Path(tmp)/'site';root.mkdir();subprocess.run(['git','init','-q',str(root)],check=True)
   subprocess.run(['git','-C',str(root),'-c','user.name=Test','-c','user.email=test@example.invalid','commit','--allow-empty','-qm','fixture'],check=True)
   for base in ['dist','media/dist']:
    p=root/base/'index.html';p.parent.mkdir(parents=True,exist_ok=True);p.write_text('<html></html>')
   p=root/'dist/old/post/index.html';p.parent.mkdir(parents=True);p.write_text('<link rel="canonical" href="https://consilegy.com/old/post/"><meta property="og:type" content="article"><meta name="robots" content="noindex"><article><h1>Old title</h1><p>Full body</p><img alt src="/a.png"></article>')
   p=root/'media/dist/new/index.html';p.parent.mkdir(parents=True);p.write_text('<link rel="canonical" href="https://media.consilegy.com/new/"><script type="application/ld+json">{"@type":"Article","headline":"New title"}</script><article><h1>New title</h1><p>Body</p><nav>TOC</nav></article>')
   p=root/'media/dist/alias/index.html';p.parent.mkdir(parents=True);p.write_text((root/'media/dist/new/index.html').read_text())
   out=Path(tmp)/'queue';m.inventory(root,out)
   data=json.loads((out/'manifest.json').read_text());self.assertEqual(len(data['entries']),2)
   for e in data['entries']:
    text=Path(e['input']).read_text();self.assertEqual(sum(l.startswith('# ') for l in text.splitlines()),1);self.assertNotIn('TOC',text)
   self.assertIn('noindex',Path(next(e['input'] for e in data['entries'] if e['site']=='root')).read_text())
unittest.main()
