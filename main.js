'use strict'

const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

var mainWindow = null
var chatWindow = null

app.on('ready', () => {
  mainWindow = new BrowserWindow({width: 800, height: 600, webPreferences: {nodeIntegration: false}})
  mainWindow.loadURL('http://app.emby.media/home.html')

  chatWindow = new BrowserWindow({width: 200, height: 200, parent: mainWindow, alwaysOnTop: true, transparent: true, frame: false})
  chatWindow.loadURL('https://appr.tc/')

  mainWindow.on('closed', function() {
    mainWindow = null
  })
  chatWindow.on('closed', function() {
    chatWindow = null
  })
})
