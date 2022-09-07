//Мобильное меню
var touch = $('#touch-menu'); // кнопка меню
var menu = $('.tgnav'); // ul.tgnav - обертка меню
var dropdown = $('.dropdown'); // li.dropdown - элемент меню, содержищий подменю
var dropdownToggle = $('.dropdown-toggle'); // a.dropdown-toggle - кнопка с подменю
var dropdownMenu = $('.dropdown-menu'); // div.dropdown-menu - контейнер для подменю

// По  клику на кнопке меню показываем меню или скрываем
// var menu = $('.tgnav'); // ul.tgnav - обертка меню
$(touch).on('click', function(e) {
	e.preventDefault(); // Убираем действие по умолчанию
	$(this).next(menu).stop().slideToggle(); // Следующему эл-ту с классом .tgnav даем slideToggle
});

$(window).resize(function() {
	// возвращает видимость меню для ПК если оно было закрыто на мобильной версии
	var wid = $(window).width();
	if (wid > 760 && menu.is(':hidden')) {
		menu.removeAttr('style');
	}
});

// клик по кнопке с подменю
// var dropdownToggle = $('.dropdown-toggle');
$(dropdownToggle).on('click', function(e) {
	e.preventDefault();
	if ($(this).is('.open')) {
		// если кнопка с классом open, то прячем подменю
		$(this).removeClass('open').next().slideToggle(300);
	} else {
		// если закрыто, то ищем ближайший родительский ul, в нем ищем открытые кнопки .dropdown-toggle.open , закрываем их, закрываем ранее открытые подменю
		$(this).closest('ul').find('.dropdown-toggle.open').removeClass('open').next().slideToggle(300);
		$(this).addClass('open').next().slideToggle(300); // Выбранной кнопке добавляем класс open, открываем подменю
	}
});

// Закрываем подменю по клику вне его (и вне кнопки с подменю)
// var touch = $('#touch-menu');
// var menu = $('.tgnav');
// var dropdownToggle = $('.dropdown-toggle');
// var dropdownMenu = $('.dropdown-menu');
// $(function() {
// 	$(document).click(function(e) {
// 		var clickElementClass = e.target.getAttribute('class'); // определяем класс у элемента, по которому кликнули
// 		var clickElementTagName = e.target.tagName; // определяем тег у элемента, по которому кликнули
// 		var clickElement = clickElementTagName + '.' + clickElementClass; // определяем тег у элемента, по которому кликнули
// 		console.log('clickElement > ' + clickElement);cons
// 		событие клика по веб-документу
// 		var dropdownMenu = $('.dropdown'); // указываем элемент
// 		if (
// 			// !dropdown.is(e.target) && // если клик был не по кнопке
// 			!dropdown.is(e.target) && // если клик был не по нашему элементу
// 			dropdown.has(e.target).length === 0 // и не по его дочерним элементам
// 		) {
// 			dropdown.children(dropdownMenu).removeAttr('style');
// 			$(this).children(dropdownMenu).hide();
// 		}
// 	});
// });

// Закрываем мобильное меню по клику вне его
// var touch = $('#touch-menu');
// var menu = $('.tgnav');
$(function() {
	$(document).click(function(e) {
		// событие клика по веб-документу
		// var dropdown = $('.dropdown'); // указываем элемент
		if (
			!touch.is(e.target) && // если клик был не по кнопке открытия меню
			!menu.is(e.target) && // если клик был не по меню
			menu.has(e.target).length === 0 // и не по его дочерним элементам
		) {
			menu.removeAttr('style');
		}
	});
});
