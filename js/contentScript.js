chrome.runtime.onMessage.addListener(function (msg, sender) {
	switch(msg.message) {
		case "scrollDowntoEnd":
			var checksc = scrollDowntoEnd();
			if(checksc) {
				localStorage.setItem("scrollDowntoEnd", true);
			}
		break;
		case "like":
			var like = $(document).find('.dribbble-shot-actions li a#like-btn.form-btn.outlined.stats-action.like-shot');
			console.log('Total ->', like.length);
			if(like.length > 0) {
				action(like, 0);
			}
			console.log('Done with like!');
		break;
		case "dislike":
			var dislike = $(document).find('.dribbble-shot-actions li a.form-sub.stats-action.like-shot.current-user-likes');
			console.log('Total ->', dislike.length);
			if(dislike.length > 0) {
				action(dislike, 0);
			}
		  	console.log('Done with dislike!');
		break;
	  }
});

function action(item, i) {
	console.log(i);
	setTimeout(function () {
		item[i].click(); 
		// console.log(item[i]);
	   i++;                    
	   if (i < item.length) {  
		action(item, i);
	   }
	}, 1000)
}

function scrollDowntoEnd()
{
	// var checkLoadMore = $('a.form-btn.load-more:visible').length;
	// if(checkLoadMore > 0) {
	// 	console.log('checkLoadMore' ,checkLoadMore);
	// 	var lbut = $('a.form-btn.load-more').click();
	// 	if(lbut.length > 0) {
	// 		$(document).scrollTop($(document).height());
	// 	}
	// } else {
	// 	$(document).scrollTop($(document).height());
	// }
	// var nullMsg = $('.loading-more span.null-message').length;
	// if(nullMsg > 0)
	// {
	// 	return true;
	// } else {
	// 	$('a.form-btn.load-more').click();
	// 	setTimeout(function() { 
	// 		scrollDowntoEnd(); 
	// 	} ,1000);
	// }
}