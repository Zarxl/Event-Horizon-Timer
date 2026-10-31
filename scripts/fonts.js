// Copies the Unbounded + Space Grotesk font files from npm into www/fonts so the app works offline.
const fs=require('fs'),path=require('path');
const out=path.join(__dirname,'..','www','fonts');fs.mkdirSync(out,{recursive:true});
const defs=[['unbounded','Unbounded',[500]],['space-grotesk','Space Grotesk',[400,500,700]]];
let css='';
for(const [pkg,fam,ws] of defs)for(const w of ws){
  const f=`${pkg}-latin-${w}-normal.woff2`;
  const src=path.join(__dirname,'..','node_modules','@fontsource',pkg,'files',f);
  if(!fs.existsSync(src)){console.warn('font missing:',f);continue}
  fs.copyFileSync(src,path.join(out,f));
  css+=`@font-face{font-family:"${fam}";font-weight:${w};font-style:normal;font-display:swap;src:url(${f}) format("woff2")}\n`;
}
fs.writeFileSync(path.join(out,'fonts.css'),css);
