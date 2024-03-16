const { app, BrowserWindow } = require('electron');

/**
 * Event listener for the 'before-quit' event.
 * This event is emitted when Electron is about to quit the application.
 */
app.on('before-quit', () => {
    console.log('Saliendo...');
});

/**
 * Event listener for the 'ready' event.
 * This event is emitted when Electron has finished initializing and is ready to create browser windows.
 */
app.on('ready', () => {

    /**
     * Create a new browser window.
     */
    let win = new BrowserWindow({
        width: 800,
        height: 600,
        title: 'Primera aplicación',
        center: true,
        maximizable: false,
        webPreferences: {
            nodeIntegration: true
        }
    });

    /**
     * Event listener for the 'move' event.
     * This event is emitted when the browser window is moved.
     */
    win.on('move', () => {
        const position = win.getPosition();
        console.log(position);
    });

    /**
     * Event listener for the 'closed' event.
     * This event is emitted when the browser window is closed.
     * It quits the Electron application.
     */
    win.on('closed', () => {
        app.quit();
    });

});