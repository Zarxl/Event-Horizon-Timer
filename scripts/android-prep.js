// Adds notification + exact-alarm permissions to the generated Android project.
const fs=require('fs'),p='android/app/src/main/AndroidManifest.xml';
let x=fs.readFileSync(p,'utf8');
const perms=['POST_NOTIFICATIONS','SCHEDULE_EXACT_ALARM','USE_EXACT_ALARM','RECEIVE_BOOT_COMPLETED','VIBRATE'];
for(const n of perms)if(!x.includes('android.permission.'+n))x=x.replace('</manifest>',`    <uses-permission android:name="android.permission.${n}" />\n</manifest>`);
fs.writeFileSync(p,x);console.log('Manifest patched');
