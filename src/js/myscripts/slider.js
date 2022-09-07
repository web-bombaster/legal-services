// http://kenwheeler.github.io/slick/

//Слайдер в шапке сайта
$('.bigslider').slick({
	//autoplay: true,
	//autoplaySpeed: 4000000,
	adaptiveHeight: false,
	pauseOnHover: false,
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	fade: false,
	dots: false
});

//Слайдер видео
// $('.portfolio-slider').slick({
//     pauseOnHover: true,
//     autoplay: true,
//     autoplaySpeed: 4000,
//     adaptiveHeight: true,
// 	infinite: true,
// 	slidesToShow: 1,
// 	slidesToScroll: 1,
// 	fade: true,
// 	dots: false
// });

//Слайдер фото в два ряда
// $('.portfolio-slider-photo').slick({
// 	infinite: true,
// 	slidesToShow: 1,
// 	rows: 2,
// 	slidesPerRow: 4,
// 	autoplay: true,
// 	autoplaySpeed: 4000,
// 	fade: true,
// 	dots: false,
// 	responsive: [
// 		{
// 			breakpoint: 1200,
// 			settings: {
// 				slidesPerRow: 4
// 			}
// 		},
// 		{
// 			breakpoint: 700,
// 			settings: {
// 				slidesPerRow: 2
// 			}
// 		},
// 		{
// 			breakpoint: 500,
// 			settings: {
// 				slidesPerRow: 2
// 			}
// 		}
// 		// You can unslick at a given breakpoint now by adding:
// 		// settings: "unslick"
// 		// instead of a settings object
// 	]
// });

//Слайдер circle3 - кружки три в ряд
// $('.circle3-slider').slick({
// 	infinite: true,
// 	slidesToShow: 3,
// 	autoplay: true,
// 	autoplaySpeed: 4000,
// 	// fade: true,
// 	// dots: false,
// 	slidesToScroll: 1,
// 	responsive: [
// 		{
// 		breakpoint: 1200,
// 		settings: {
// 			slidesToShow: 3
// 		}
// 		},
// 		{
// 		breakpoint: 650,
// 		settings: {
// 			slidesToShow: 2
// 		}
// 		},
// 		{
// 		breakpoint: 400,
// 		settings: {
// 			slidesToShow: 1
// 		}
// 		}
// 		// You can unslick at a given breakpoint now by adding:
// 		// settings: "unslick"
// 		// instead of a settings object
// 	]
// });

//Слайдер партнеры
// $('.partners-wrapper').slick({
// 	infinite: true,
// 	slidesToShow: 5,
// 	autoplay: true,
// 	autoplaySpeed: 4000000,
// 	centerMode: true,
// 	variableWidth: true,
// 	// fade: true,
// 	// dots: false,
// 	slidesToScroll: 1,
// 	responsive: [
// 		{
// 		breakpoint: 1200,
// 		settings: {
// 			slidesToShow: 3
// 		}
// 		},
// 		{
// 		breakpoint: 650,
// 		settings: {
// 			slidesToShow: 2
// 		}
// 		},
// 		{
// 		breakpoint: 400,
// 		settings: {
// 			slidesToShow: 1
// 		}
// 		}
// 		// You can unslick at a given breakpoint now by adding:
// 		// settings: "unslick"
// 		// instead of a settings object
// 	]
// });

//Слайдер отзывы
$('.otzyvy-slider').slick({
	//dots: true,
	//autoplay: true,
	//autoplaySpeed: 4000,
	adaptiveHeight: true,
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	fade: false,
	dots: false
});
