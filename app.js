const  {app,BrowserWindow} = require('electron');
let mainWindow = null;

app.on('ready',() => {
    mainWindow = new BrowserWindow({
        width:800, 
        height:600,
        fullscreen: true,
        titleBarStyle: 'hiddenInset',
        frame:true,
        resizable:false,
        show:false 
    
}); 
  // to open debug console garai 
   //mainWindow.webContents.openDevTools();  
   
    mainWindow.loadURL('file://'+__dirname+'/index.html');
    mainWindow.setMenuBarVisibility(false);
    mainWindow.on('ready-to-show',() => {
     mainWindow.show();

    });

});