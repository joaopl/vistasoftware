
jQuery(document).ready(function($) {


	$(".icon-balanca").click(function (event) {
	  alert("Você clicou no cabeçalho!");
	});

	$('.abrir-menu').click(function(event) {
		event.preventDefault();
		$('body').css('overflow','hidden');
		$('#nav').css('display', 'flex');
		$('#nav').animate({opacity: 1}, 400);

		$(this).animate({
			opacity: 0,
		},
		400, function() {
			$(this).hide();
			$('.fechar-menu').show();
			$('.fechar-menu').animate({opacity: 1}, 400);
		});
	});

	$('.fechar-menu').click(function(event) {
		event.preventDefault();
		$('body').css('overflow','auto');
		$('#nav').animate({opacity: 0}, 400, function(){
			$('#nav').hide();
		});

		$(this).animate({
			opacity: 0,
		},
		400, function() {
			$(this).hide();
			$('.abrir-menu').show();
			$('.abrir-menu').animate({opacity: 1}, 400);
		});
	});
});