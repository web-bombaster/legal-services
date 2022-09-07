//Шапка на весь экран
function heightDetect() {
	$('.header').css('height', $(window).height());
}
heightDetect();
$(window).resize(function() {
	heightDetect();
});
