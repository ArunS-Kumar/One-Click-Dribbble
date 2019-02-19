chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (changeInfo.status == 'complete') {
        if(tab.url.includes('dribbble.com')) {
			chrome.tabs.executeScript(tabId, {file: "js/jquery-3.3.1.slim.min.js"});
			chrome.tabs.executeScript(tabId, {file: "js/contentScript.js"});
        }
    }
});

function sendMessage(msg)
{
	chrome.tabs.query({
		active: true,
		currentWindow: true
	}, function(tabs) {
		console.log(tabs);
	  chrome.tabs.sendMessage(tabs[0].id, { message : msg }, function(response) {
			  console.log(response);
	   });
	});	
}
