// Если ширина таблицы больше доступной области отображения, то ширину эмулируемой полосы прокрутки делаем равной ширине таблицы. Иначе скрываем эмулируемую полосу прокрутки сверху

function adaptiveTable() {
	var adaptiveTableWrapper = $('.adaptive-table-wrapper'); // обертка таблицы
	var table = $('table');
	var scrollWrapper = $('.scroll-wrapper'); // обертка псевдо полосы прокрутки

	table.each(function() {
		var widthTable = $(this).width(); // ширина таблицы
		var widthAdaptiveTableWrapper = $(this).closest(adaptiveTableWrapper).width(); // ширина обертки таблицы
		var scrollWrapper = $(this).closest(adaptiveTableWrapper).prev(scrollWrapper); // выбираем обертку эмулиремой полосы прокрутки
		var scrollInner = $(this).closest(adaptiveTableWrapper).prev(scrollWrapper).find('.scroll-inner');

		scrollInner.width(widthTable); // ширину псевдо полосы прокрутки делаем равной ширине таблицы

		if (widthTable > widthAdaptiveTableWrapper) { // если ширина таблицы больше ширины ее обертки
			scrollWrapper.css('display', 'block'); // то показываем эмулируемую полосу прокрутки
		} else {
			scrollWrapper.css('display', 'none'); // иначе скрываем эмулируемую полосу прокрутки
		}
	});
}

adaptiveTable(); // Вызов функции adaptiveTable для первичной отработки

// Повторный вызов функции adaptiveTable при ресайзе окна
$(window).resize(function() {
	adaptiveTable();
});

// при прокрутке псевдо полосы прокрутки проскролить обертку этой же таблицы на такое же значение
$('.scroll-wrapper').on('scroll', function (e) {
	let positionX = $(this).scrollLeft();
	$(this).next(".adaptive-table-wrapper").scrollLeft(positionX);
});

// при прокрутке обертки таблицы проскролить псевдо полосу прокрутки этой же таблицы на такое же значение
$('.adaptive-table-wrapper').on('scroll', function (e) {
	let positionX = $(this).scrollLeft();
	$(this).prev(".scroll-wrapper").scrollLeft(positionX);
});

// Для проверки значений переменных
// console.log('positionX > ' + positionX);
