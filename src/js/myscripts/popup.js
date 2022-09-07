// http://dimsemenov.com/plugins/magnific-popup/

//Попап обычный для картинок с галереей
$('.popup').magnificPopup({
	type: 'image',
	gallery: { enabled: true }
});

//Попап обычный для илайнового контента, например, для скрытых форм
$('.popup_content').magnificPopup({
	type: 'inline',
	midClick: true,
	showCloseBtn: true
});
//$('.popup_content.podpiska').click();

//Попап для видео
$('.magn-youtube, .magn-vimeo, .magn-gmaps').magnificPopup({
	disableOn: 150,
	type: 'iframe',
	mainClass: 'mfp-fade',
	removalDelay: 160,
	preloader: false,
	fixedContentPos: false
});

//Попап для ajax содержимого
$('.simple-ajax-popup').magnificPopup({
	type: 'ajax'
	// closeOnBgClick: false
});
