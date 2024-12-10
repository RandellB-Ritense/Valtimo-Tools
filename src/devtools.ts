chrome.devtools.panels.create(
    "My DevTools Panel",
    "icons/icon48.png",
    "panel.html",
    function (panel) {
        console.log("DevTools panel created!");
    }
);
