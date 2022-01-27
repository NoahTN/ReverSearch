chrome.runtime.onInstalled.addListener(function() {
   chrome.contextMenus.create({
      "id": "my-menu",
      "title": "ReverSearch Image",
      "contexts": ["image"],
   });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
   chrome.tabs.sendMessage(tab.id, {type: "search", data: info});
});