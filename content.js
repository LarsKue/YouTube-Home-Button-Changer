const linkItem = document.createElement("a");
linkItem.href="https://www.youtube.com/";
linkItem.innerHTML = "<img src='https://imgur.com/gBgwnSa.png' title='YouTube Home'>";
linkItem.setAttribute("style",
    "position:fixed;" +
    "top:15px;" +
    "left:70px;" +
    "z-index:20000;");

document.getElementsByTagName("body")[0].appendChild(linkItem);