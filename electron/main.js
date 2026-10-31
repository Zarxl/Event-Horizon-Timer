const {app,BrowserWindow,Menu}=require('electron');const path=require('path');
function create(){
  const w=new BrowserWindow({width:1100,height:820,minWidth:380,minHeight:620,backgroundColor:'#000000',title:'Event Horizon',icon:path.join(__dirname,'../build/icon.png'),webPreferences:{backgroundThrottling:false}});
  Menu.setApplicationMenu(null);
  w.loadFile(path.join(__dirname,'../www/index.html'));
}
app.whenReady().then(create);
app.on('window-all-closed',()=>app.quit());
