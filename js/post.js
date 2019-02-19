var background_page = chrome.extension.getBackgroundPage();
// Jquery functions //
// $(function() 
// {   
    // localStorage.setItem("scrollDowntoEnd", false);
    // background_page.sendMessage('scrollDowntoEnd');
// });

$(document).on('click', '#like',function(val) {
    background_page.sendMessage('like');
});

$(document).on('click', '#dislike',function(val) {
    background_page.sendMessage('dislike');
});