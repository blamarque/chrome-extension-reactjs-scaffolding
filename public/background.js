/*global chrome*/


function updateBadgeCounter() {

    chrome.browserAction.setBadgeBackgroundColor({ color: [190, 190, 190, 230] });
    chrome.browserAction.getBadgeText({}, (value) => {
  
        let parsed = parseInt(value)
        let nt = 1

        if (!isNaN(parsed)) { nt = ++parsed; }
    
        chrome.browserAction.setBadgeText({ text: nt.toString(10) });
    });

}

chrome.runtime.onMessage.addListener(

    function (request, sender, sendResponse) {
        console.log(sender.tab ?
            "from a content script:" + sender.tab.url :
            "from the extension");
        if (request.selection) {
            updateBadgeCounter();
        }
    })

//Context Menu

const CONTEXT_MENU_ID = 'papyrusMenu'

let notificationOptions = {
    type:'basic',
    iconUrl: 'icon.png',
    title: 'text saved',
    message: 'text selected saved'
}

chrome.contextMenus.create({
    id: "papyrusMainMenu",
    title: "Sample Context Menu",
    contexts: ["selection"]
});

chrome.contextMenus.create({
    id: "papyrusSearchMenu",
    title: "Search",
    parentId: "papyrusMainMenu",
    contexts:["selection"],
    onclick: onClickSearch
  });

  chrome.contextMenus.create({
    id: "papyrusAddMenu",
    title: "Add to me",
    parentId: "papyrusMainMenu",
    contexts:["selection"],
    onclick: onClickAdd
  });


function onClickAdd(){
    chrome.notifications.create("newTextNotif", notificationOptions);
}

function onClickSearch(){

}

chrome.contextMenus.onClicked.addListener(function (clickData) {

    if(clickData.menuItemId === "papyrusMenu" && clickData.selectionText){
        chrome.notifications.create("newTextNotif", notificationOptions);
    }
});

//fire first time the app is install, chrome updated or the app updated
chrome.runtime.onInstalled.addListener(function() {

});
