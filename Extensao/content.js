// content.js

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.action === "toggleAddressBar") {
    openNewTabWithNewTabPage();
  }
});

function openNewTabWithNewTabPage() {
  chrome.tabs.create({ url: "http://grafana.oobj.local" });
}
