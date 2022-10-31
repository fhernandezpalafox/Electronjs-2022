//Desestructuracion de objetos
const {app, BrowserWindow}  =  require('electron');
const url = require('url');
const path  = require('path');

app.on('before-quit',  ()=> {
   console.log('Saliendo...');
});

//VAR, LET, CONST
var win;

createWindow = function(){

    win =  new BrowserWindow({
        width: 800, 
        height: 600, 
        title: 'Cuarta aplicacion - Formulario fs',
        center: true, 
        maximizable: false, 
        webPreferences:{
            nodeIntegration:true, 
            contextIsolation: false
        }
    }); 

    win.loadURL(
        url.format({
            pathname: path.join(__dirname, 'index.html'),
            protocol:'file',
            slashes:true
        })
    );
}

app.on('ready', createWindow);