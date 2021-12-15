import { isDev, Message, PORT } from './utils'

if (isDev) {
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

  const ws = new WebSocket(`ws://localhost:${PORT}`)
  ws.addEventListener('message', (event) => {
    if (event.data === Message.FileChange) {
      chrome.tabs.query({ active: true }).then((tabs) => {
        if (tabs[0]) {
          chrome.runtime.reload();
          chrome.tabs.reload(tabs[0].id as number)
        }
      });
    }
  })
}
