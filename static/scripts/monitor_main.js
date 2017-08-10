$(function(){
	initNavShowAndHide();
});

function initNavShowAndHide(){
	$("#menu-icon-id").on("click ontouchend",function(event){
		console.log(1);
		$(".im-nav-bar").addClass("visible");
		event.stopPropagation();
	});

	$(document).click(function(){
		console.log(2);
           $(".im-nav-bar").removeClass("visible");  
	});
}
function initClickStyle(){
	
}