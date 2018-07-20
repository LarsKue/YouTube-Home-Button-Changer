// this is called when the user clicks on the browser extension icon
let enabled = true;

chrome.browserAction.onClicked.addListener(function(tab) {
    // switches the enabled mode
    enabled = !enabled;
    if (enabled) {
        chrome.browserAction.setIcon({path:"icon.png"})
    }
    else {
        chrome.browserAction.setIcon({path:"iconDisabled.png"})
    }

    // opens YouTube in a new tab
    // chrome.tabs.create({"url": "https://www.youtube.com/"});
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.msg === "getEnabled") {
        sendResponse({enabled: enabled});
        return true;
    }
});