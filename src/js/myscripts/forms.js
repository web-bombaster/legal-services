// Паттерны для валидации форм
var mail_pattern = /^[\.a-z0-9_-]+@[a-z0-9-]+\.[a-z]{2,8}$/i;
var tel_pattern = /^[\+0-9- \(\)]{5,25}$/;
var text_pattern = /^[\+a-zа-я0-9- \*\+\=\@\.\,\;\:\"\«\»\!\?\(\)\№\%]+$/i;

// Валидация обязательного поля для телефонов
$('.jsFormPhone').blur(function() {
	// console.log('Тег для $(this)  > ' + $(this).get(0).tagName); // Тег для $(this)
	if ($('.jsFormPhone').val() != '') {
		// Если поле заполнено
		if ($(this).val().search(tel_pattern) == 0) {
			// Если удовлетворяет паттерну
			$(this).addClass('succes');
		} else {
			// Если не удовлетворяет паттерну
			$(this).parent().addClass('error');
		}
	} else {
		$(this).parent().addClass('error');
		// $('.form .submit').attr('disabled', true);
	}
});

// Валидация обязательного поля для мейлов
$('.jsFormMail').blur(function() {
	if ($(this).val() != '') {
		// Если поле заполнено
		if ($(this).val().search(mail_pattern) == 0) {
			// Если удовлетворяет паттерну
			$(this).addClass('succes');
		} else {
			// Если не удовлетворяет паттерну
			$(this).parent().addClass('error');
		}
	} else {
		// Если поле пустое
		$(this).parent().addClass('error');
	}
});

// Валидация обязательного поля для текста
$('.jsFormText').blur(function() {
	if ($('.jsFormText').val() != '') {
		// Если поле заполнено
		if ($(this).val().search(text_pattern) == 0) {
			// Если удовлетворяет паттерну
			$(this).addClass('succes');
		} else {
			// Если не удовлетворяет паттерну
			$(this).parent().addClass('error');
		}
	} else {
		$(this).parent().addClass('error');
	}
});

// Проверка, возможна ли отправка. Если возможна, даем кнопке отправки класс submit
function form_succes() {
	// var required_polya = $('.form input[required]');
	var required_polya = $('.form [required]'); // обязательные input и textarea
	var form_succes; // для проверки, разрешена ли отправка
	var btn_submit;

	$(required_polya).blur(function() {
		// console.log('form input[required] > ' + $(this));
		// $(this).closest('.form').find('input[required]').each(function() {
		$(this).closest('.form').find('[required]').each(function() {
			// console.log('Класс родителя > ' + $(this).parent().attr('class')); // класс родителя для проверки, что есть $(this) - найденные обязательные поля
			form_succes = 1; // Изначально отправка возможна
			if ($(this).hasClass('succes')) {
			} else {
				// Если нет класса succes отправку запрещаем
				form_succes = 0;
			}
		});

		// Даем кнопке отправки класс submit если отправка разрешена
		var btn_submit = $(this).closest('.form').find('.submit');
		// console.log('btn_submit tag > ' + btn_submit.get(0).tagName);
		if (form_succes == 1) {
			// console.log('Отправка разрешена, делаем submit  > ' + $(this).get(0).tagName);
			btn_submit.attr('type', 'submit');
			// console.log('Отправка разрешена, делаем submit  > ' + $(this).closest('.form').find('.submit').prop('type'));
			// console.log($(this).closest('.form').find('.submit').attr('type'));
		} else {
			// console.log('Отправка не разрешена, делаем button  > ' + $(this).get(0).tagName);
			btn_submit.attr('type', 'button');
			// console.log('Отправка не разрешена, делаем button  > ' +
			// 		$(this).closest('.form').find('.submit').prop('type')
			// );
		}
	});
}

form_succes(); // Вызов проверки возможности отправки формы

// Проверяем наличие незаполненных обязательных полей по клику на .submit
$(function() {
	$('.submit').click(function() {
		// Определяем обязательные поля и чекбоксы
		// var required_polya = $(this).closest('.form').children('.before').children('input[required]');
		var required_polya = $(this).closest('.form').children('.before').children('[required]');
		var required_checkbox = $(this).closest('.form').find('input[type="checkbox"][required]');

		// Для каждого найденного пустого поля
		$(required_polya).each(function() {
			if ($.trim(required_polya.val()) == '') {
				$(this).parent().addClass('error');
			}
		});

		// Для незаполненного чекбокса политики
		$(required_checkbox).each(function() {
			if (required_checkbox.prop('checked') == false) {
				$(this).addClass('error').parent('').addClass('error');
			} else {
				$(this).removeClass('error').addClass('succes').parent('').removeClass('error');
			}
		});
	});
});

// Раздаем класс succes обязательным заполненным чекбоксам
$(function() {
	// Раздаем класс succes обязательным заполненным чекбоксам
	var required_checkbox = $('input[type="checkbox"][required]');
	$(required_checkbox).change(function() {
		// отслеживаем изменение чекбокса
		if ($(this).prop('checked') == false) {
			$(this).removeClass('succes');
		} else {
			$(this).addClass('succes'); // Для заполненного чекбокса
		}
	});
});

// Убираем классы error у элементов в фокусе
$('input, textarea').focus(function() {
	$(this).removeClass('error').parent().removeClass('error');
});

//Отправка формы для заказа звонка #zayavka
$('#zayavka').submit(function() {
	$.ajax({
		type: 'POST',
		url: 'mail.php',
		data: $(this).serialize()
	}).done(function() {
		// выполнить после успешной отправки
		$(this).find('input').val('');
		// alert("Спасибо за заявку! Скоро мы с вами свяжемся."); // Сообщение в виде стандартного алерта
		$('#zayavka').trigger('reset');

		$.magnificPopup.close(); // Закрыть открытые попапы
		// Создать попап со своим инлайновым содержимым
		$.magnificPopup.open(
			{
				items: {
					src: '<div class="white-popup-block">Письмо успешно отправлено.<br>Спасибо за заявку!</div>'
				},
				removalDelay: 3000,
				showCloseBtn: true,
				type: 'inline'
			},
			0
		);
		$.magnificPopup.close();
	});
	return false;
});

//Отправка формы обратной связи #zayavka2
$('#zayavka2').submit(function() {
	$.ajax({
		type: 'POST',
		url: 'mail2.php',
		data: $(this).serialize()
	}).done(function() {
		// выполнить после успешной отправки
		$(this).find('input').val('');
		// alert("Спасибо за заявку! Скоро мы с вами свяжемся."); // Сообщение в виде стандартного алерта
		$('#zayavka2').trigger('reset');

		$.magnificPopup.close(); // Закрыть открытые попапы
		// Создать попап со своим инлайновым содержимым
		$.magnificPopup.open(
			{
				items: {
					src: '<div class="white-popup-block">Письмо успешно отправлено.<br>Спасибо за заявку!</div>'
				},
				removalDelay: 3000,
				showCloseBtn: true,
				type: 'inline'
			},
			0
		);
		$.magnificPopup.close();
	});
	return false;
});
