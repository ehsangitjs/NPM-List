const {app,BrowserWindow,ipcMain} = require('electron')
app.on('ready',()=>{
    const win = new BrowserWindow({
        webPreferences:{
            nodeIntegration:true,
            contextIsolation:false
        },
        width:400,
        height:600,
        icon:'npm.ico',
        title:'NPM-List',
        resizable:false
    })
    win.setMenu(null)
    win.loadFile('index.html')
})