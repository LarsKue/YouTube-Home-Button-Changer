// this is called when the user clicks on the browser extension icon

chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.create({"url": "https://www.youtube.com/"});
});