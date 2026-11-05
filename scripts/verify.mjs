import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {load} from 'cheerio';
const origin='https://www.victorzamaraev.com';
const baseline=JSON.parse(fs.readFileSync('scripts/content-baseline.json','utf8'));
const normalize=value=>value.replace(/\s+/g,' ').trim();
const files=fs.readdirSync('_site',{recursive:true}).filter(f=>f.endsWith('.html'));
function resolve(url){let file=path.join('_site',decodeURIComponent(url.pathname));if(fs.existsSync(file)&&fs.statSync(file).isDirectory())file=path.join(file,'index.html');return file;}
for(const b of baseline)assert.ok(fs.existsSync('_site/'+b.file),`Missing original URL: ${b.url}`);
let checked=0;
for(const file of files){
 const html=fs.readFileSync('_site/'+file,'utf8');const $=load(html);const url=file==='index.html'?'/':'/'+file.replace(/index\.html$/,'');
 assert.equal($('html').length,1,`${file}: one HTML document`);
 assert.equal($('main').length,1,`${file}: one main landmark`);
 assert.equal($('link[rel="canonical"]').attr('href'),new URL(url,origin).href,`${file}: canonical URL`);
 assert.ok(!html.includes('localhost:4000'),`${file}: local development URL`);
 assert.equal($('nav a[aria-current="page"]').length,['/','/publications/','/talks/','/teaching/'].includes(url)?1:0,`${file}: active navigation`);
 // HTML preserved from the old site must not be re-parsed into paragraph-wrapped spans or grids.
 for(const row of $('.pub_list > li').toArray()){
  assert.equal($(row).children('.pub_title').length,1,`${file}: publication title must be its own field`);
  assert.equal($(row).children('.pub_details').length,1,`${file}: publication details must follow the title`);
  assert.ok($(row).children('.pub_details').text().trim(),`${file}: publication details cannot be empty`);
 }
 for(const grid of $('.feature__wrapper').toArray()){
  assert.ok($(grid).children().toArray().every(child=>$(child).hasClass('feature__item')),`${file}: unexpected markup breaks feature grid`);
 }
 for(const element of $('[href], [src]').toArray()){
  const raw=$(element).attr('href')??$(element).attr('src');if(!raw||/^(mailto:|tel:|data:|javascript:)/.test(raw))continue;
  const target=new URL(raw,new URL(url,origin));if(target.origin!==origin)continue;
  const dest=resolve(target);assert.ok(fs.existsSync(dest),`${file}: broken local link ${raw}`);
  if(target.hash&&dest.endsWith('.html')){
   const doc=load(fs.readFileSync(dest,'utf8'));const id=decodeURIComponent(target.hash.slice(1));
   assert.ok(doc('[id]').toArray().some(e=>doc(e).attr('id')===id)||doc('a[name]').toArray().some(e=>doc(e).attr('name')===id),`${file}: missing anchor ${raw}`);
  }
  checked++;
 }
 if(process.argv.includes('--migration')){
  const b=baseline.find(b=>b.file===file);if(!b)continue;
  const content=load($('.page__content').html());content('*').contents().filter((i,e)=>e.type==='comment').remove();
  assert.equal(normalize(content.text()),b.text,`${file}: original content changed`);
  const links=content('[href]').map((i,e)=>content(e).attr('href')).get();
  for(const link of b.links)assert.ok(links.includes(link),`${file}: original link missing ${link}`);
  const images=content('img').map((i,e)=>content(e).attr('src')).get();
  assert.deepEqual(images,b.images,`${file}: images changed`);
  for(const id of b.ids)assert.ok(content('[id]').toArray().some(e=>content(e).attr('id')===id),`${file}: original anchor missing ${id}`);
 }
}
for(const file of ['sitemap.xml','feed.xml']){
 const xml=fs.readFileSync('_site/'+file,'utf8');assert.ok(!xml.includes('localhost:4000'));
 const $=load(xml,{xmlMode:true});assert.ok($(file==='sitemap.xml'?'urlset':'feed').length);
 if(file==='feed.xml'){assert.ok($('entry').length>=2);assert.ok($('content').first().text().includes('<p>'));}
}
assert.equal(fs.readFileSync('_site/CNAME','utf8').trim(),'www.victorzamaraev.com');
assert.ok(fs.existsSync('_site/.nojekyll'));
console.log(`Verified ${files.length} original pages and ${checked} local links/assets; canonical URLs, feed, sitemap, custom domain${process.argv.includes('--migration')?', and original text, links, images and anchors':''}.`);
