// popup.js
document.addEventListener("DOMContentLoaded", function () {
  var toggleButton = document.getElementById("toggleButton");

  toggleButton.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      var tab = tabs[0];
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: toggleAddressBarFunction
      });
    });
  });

  function toggleAddressBarFunction() {
    // Código que realiza a ação desejada na guia ativa
    chrome.runtime.sendMessage({ action: "toggleAddressBar" });
  }
});
