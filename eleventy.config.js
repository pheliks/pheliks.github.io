import {parse} from 'yaml';
import markdownIt from 'markdown-it';
const md=markdownIt({html:true});
export default function(config){
 config.addDataExtension('yml', contents=>parse(contents));
 config.addFilter('markdownify',value=>md.render(String(value??'')));
 config.addFilter('absoluteUrl',value=>new URL(value,'https://www.victorzamaraev.com').href);
 config.addFilter('latestPostDate', posts=>posts.length?posts[posts.length-1].date:new Date('2021-08-19'));
 config.addFilter('isoDate',value=>new Date(value).toISOString());
 config.addPassthroughCopy({assets:'assets','favicon.ico':'favicon.ico',CNAME:'CNAME'});
 config.addPassthroughCopy({'src/assets':'assets'});
 config.addPassthroughCopy({'src/.nojekyll':'.nojekyll'});
 config.setLibrary('md',md);
 return {dir:{input:'src',output:'_site'},markdownTemplateEngine:'liquid',htmlTemplateEngine:'njk'};
}
