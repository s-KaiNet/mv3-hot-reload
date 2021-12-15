"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
if (utils_1.isDev) {
    /*
    chrome.runtime.onMessage.addListener((message) => {
      if (message === Message.Reload) {
        chrome.tabs.query({ active: true, lastFocusedWindow: true }).then((tabs) => {
          if (tabs[0]) {
            chrome.tabs.reload(tabs[0].id as number)
          }
          chrome.runtime.reload()
        })
      }
    })
    */
    const ws = new WebSocket(`ws://localhost:${utils_1.PORT}`);
    ws.addEventListener('message', (event) => {
        if (event.data === utils_1.Message.FileChange) {
            chrome.tabs.query({ active: true }).then((tabs) => {
                if (tabs[0]) {
                    chrome.runtime.reload();
                    chrome.tabs.reload(tabs[0].id);
                }
            });
        }
    });
}
