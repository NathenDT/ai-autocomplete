console.log('hello')

// Using manifest v3
// Incert a script tag into the page
const script = document.createElement('script')
script.src = chrome.runtime.getURL('src/page.js')
document.body.appendChild(script)
