import { contextBridge, ipcRenderer } from 'electron';

export const WORLD_API_KEY = 'exposed';

contextBridge.exposeInMainWorld(WORLD_API_KEY, {});
