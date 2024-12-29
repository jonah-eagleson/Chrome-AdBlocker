const defaultFilters = [
    "*://*.doubleclick.net/*",
    "*://partner.googleadservices.com/*",
    "*://*.adbrite.com/*",
    "*://*.zedo.com/*",
]

chrome.webRequest.onBeforeRequest.addListener(
    function(details) { return { cancel: true }},
    { urls: defaultFilters },
    ["blocking"]
)