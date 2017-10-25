//sending the url path to background
var path = window.location.href;
chrome.runtime.sendMessage(path);