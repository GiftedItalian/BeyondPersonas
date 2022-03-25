window.onbeforeunload = setTimeout(function () {
    window.scrollTo(0, 0);
  },500);

$(document).scroll(function() {
    if($(window).scrollTop() >= 0 &&  $(window).scrollTop() <= 100) {
        document.getElementById("navbar").style.backgroundColor = "rgba(1, 1, 27," +  0.05 * $(window).scrollTop() + ")";
    }
    else{
        document.getElementById("navbar").style.backgroundColor = "rgba(1, 1, 27, 1)";
    }
  });

$(document).ready(function(){
	$(".image").hover(function(){
		$(this).toggleClass("gradient");
	});
});
