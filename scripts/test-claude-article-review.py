import importlib.util,json,tempfile,unittest
from pathlib import Path
spec=importlib.util.spec_from_file_location('review', Path(__file__).with_name('claude-article-review.py'))
m=importlib.util.module_from_spec(spec);spec.loader.exec_module(m)
class Tests(unittest.TestCase):
 def test_quote_and_missing_item_fail(self):
  r={'summary':'x','assessments':[{'id':'F01','status':'問題あり','reason':'x'}], 'findings':[{'id':'F01','severity':'Critical','quote':'ない原文','reason':'x','proposal':'x','evidence':'x'}]}
  with self.assertRaises(ValueError):m.validate(r,['F01'],'実在する原文')
  with self.assertRaises(ValueError):m.validate({'summary':'x','assessments':[],'findings':[]},['F01'],'原文')
 def test_shared_finding_requires_explicit_reference(self):
  r={'summary':'test','assessments':[{'id':'F01','status':'問題あり','reason':'F02と共通'},{'id':'F02','status':'問題あり','reason':'根拠なし'}], 'findings':[{'id':'F02','severity':'Major','quote':'原文','reason':'x','proposal':'x','evidence':'x'}]}
  m.validate(r,['F01','F02'],'原文')
  r['assessments'][0]['reason']='関連あり'
  m.validate(r,['F01','F02'],'原文')
  self.assertEqual([c['id'] for c in m.unmapped_problems(r)],['F01'])
 def test_gate_closed_for_error_changed_input_and_findings(self):
  with tempfile.TemporaryDirectory() as d:
   p=Path(d)/'article.md';p.write_text('原文')
   meta,_=m.snapshot(p);chk,text=m.snapshot(m.CHECKLIST)
   ids=m.re.findall(r'^- ([A-Z]\d+) ',text,m.re.M)
   r={'completed':True,'article':meta,'checklist':chk,'evidence':[],'phases':{}}
   for name,prefix in m.PHASES.items():
    r['phases'][name]={'session_id':'synthetic-test-not-real-review','review':{'summary':'test','assessments':[{'id':i,'status':'問題なし','reason':'synthetic'} for i in ids if i[0] in prefix],'findings':[]}}
   self.assertTrue(m.gate(r))
   r['phases']['facts']['review']['findings']=[{'id':'F01','severity':'Major','quote':'原文','reason':'x','proposal':'x','evidence':'x'}]
   self.assertFalse(m.gate(r));r['phases']['facts']['review']['findings']=[]
   r['phases']['facts']['review']['assessments'][0]['status']='要確認'
   self.assertFalse(m.gate(r));r['phases']['facts']['review']['assessments'][0]['status']='問題なし'
   p.write_text('変更した原文');self.assertFalse(m.gate(r));p.write_text('原文')
   r['completed']=False;self.assertFalse(m.gate(r))
unittest.main()
