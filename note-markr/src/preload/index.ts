// import { contextBridge } from 'electron'
// import { electronAPI } from '@electron-toolkit/preload'

import { contextBridge } from "electron"

if (!process.contextIsolated) {
  throw new Error ('contextIsolation must be enabled in browserWindow')
}

try {
  contextBridge.exposeInMainWorld ('context',)
}
