$('.accordeon .descr').hide().prev().click(function() {
	$(this).parents('.accordeon').find('.descr').not(this).slideUp().prev().removeClass('active');
	$(this).next().not(':visible').slideDown().prev().addClass('active');
});
