// this is called everytime YouTube is loaded

// check if the extension is enabled by sending a message to background.js
chrome.runtime.sendMessage({msg: "getEnabled"}, function(response) {
    if (response.enabled) {
        execute();
    }
});


function execute() {
    const linkItem = document.createElement("a");
    linkItem.href = "https://www.youtube.com/";
    linkItem.innerHTML = "<img src='https://imgur.com/gBgwnSa.png' title='YouTube Home'>";
    linkItem.setAttribute("style",
        "position:fixed;" +
        "top:15px;" +
        "left:70px;" +
        "z-index:20000;");

    document.getElementsByTagName("body")[0].appendChild(linkItem);
}