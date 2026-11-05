import fs from 'node:fs';
import path from 'node:path';
import {parse} from 'yaml';
export default function(){
  const directory=new URL('./records/',import.meta.url);
  const data=Object.fromEntries(fs.readdirSync(directory).filter(file=>file.endsWith('.yml')).map(file=>[
    path.basename(file,'.yml'),parse(fs.readFileSync(new URL(file,directory),'utf8'))
  ]));
  return {title:'Viktor Zamaraev',url:'https://www.victorzamaraev.com',data};
}
