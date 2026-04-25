const { app, BrowserWindow } = require('electron');
const path = require('path');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 650,
    title: 'Open Download Manager',
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  // Check if running in development mode (Vite uses port 5173 by default)
  mainWindow.loadURL('http://localhost:5173').catch(() => {
    // Fallback to production build
    mainWindow.loadFile(path.join(__dirname, '../dist/index.html'));
  });
  
  // Remove default menu for cleaner UI
  mainWindow.setMenuBarVisibility(false);
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
