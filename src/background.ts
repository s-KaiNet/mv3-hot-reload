import { isDev, Message } from './utils'

if (isDev) {
  chrome.runtime.onMessage.addListener((message) => {
    if (message === Message.Reload) {
      chrome.runtime.reload()

      chrome.tabs.query({ active: true, lastFocusedWindow: true }).then((tabs) => {
        if (tabs[0]) {
          chrome.tabs.reload(tabs[0].id as number)
        }
      })
    }
  })
}
