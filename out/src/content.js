"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
if (utils_1.isDev) {
    const ws = new WebSocket(`ws://localhost:${utils_1.PORT}`);
    ws.addEventListener('message', (event) => {
        if (event.data === utils_1.Message.FileChange) {
            chrome.runtime.sendMessage(utils_1.Message.Reload);
        }
    });
}
