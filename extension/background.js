'use strict';

chrome.webRequest.onSendHeaders.addListener(function(details) {
  console.warn(details);
}, {
  urls: [
    '*://*/*',
  ],
});

chrome.webRequest.onCompleted.addListener(function(details) {
  console.info(details);
}, {
  urls: [
    '*://*/*',
  ],
});
