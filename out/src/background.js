"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
if (utils_1.isDev) {
    chrome.runtime.onMessage.addListener((message) => {
        if (message === utils_1.Message.Reload) {
            chrome.runtime.reload();
            chrome.tabs.query({ active: true, lastFocusedWindow: true }).then((tabs) => {
                if (tabs[0]) {
                    chrome.tabs.reload(tabs[0].id);
                }
            });
        }
    });
}
