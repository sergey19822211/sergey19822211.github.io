
// плавный скролл при кликах на пунктах меню
// =====================================================================
$(function(){
	$('#js-button-first').on('click', function(e){
		e.preventDefault();
		var plansOffset = $('#first').offset().top;
		$('html, body').animate({scrollTop: plansOffset - 100}, 1000);	
	});
});
$(function(){
	$('#js-button-second').on('click', function(e){
		e.preventDefault();
		var plansOffset = $('#second').offset().top;
		$('html, body').animate({scrollTop: plansOffset - 100}, 1000);	
	});
});
$(function(){
	$('#js-button-third').on('click', function(e){
		e.preventDefault();
		var plansOffset = $('#third').offset().top;
		$('html, body').animate({scrollTop: plansOffset - 100}, 1000);	
	});
});
$(function(){
	$('#js-button-fourth').on('click', function(e){
		e.preventDefault();
		var plansOffset = $('#fourth').offset().top;
		$('html, body').animate({scrollTop: plansOffset - 100}, 1000);	
	});
});
$(function(){
	$('#js-button-fifth').on('click', function(e){
		e.preventDefault();
		var plansOffset = $('#fifth').offset().top;
		$('html, body').animate({scrollTop: plansOffset - 100}, 1000);	
	});
});


// плавное появление фиксированного меню при прокрутке
// =====================================================================
$(window).scroll(function(){
      if ($(this).scrollTop() > 80) {
          $('.header').addClass('header-fixed');
      } else {
          $('.header').removeClass('header-fixed');
      }
});


// модальное окно при нажатии на кнопку (закрыть - открыть)
// =====================================================================
$('#js-button-modal').on("click", function(e){
	e.preventDefault();
	$('.overlay').fadeIn();
});
$('.fa-times').on("click", function(e){
	$('.overlay').fadeOut();
});


// появление мобильного меню
// =====================================================================
$('.fa-align-justify').on("click", function(e){
	$('.menu').slideToggle();
});

// закрытие мобильного меню при клике на пунктах меню
// работает только при достижении определенного размера экрана
// =====================================================================
if ($(window).width() < 767) {
	$('.menu__item').on("click", function(e){
		$('.menu').slideUp();
	});
} 


// табы вкладки в шестой секции
// =====================================================================
$('[data-tab="header"] a').on('click', function(event) {
	event.preventDefault();
	var activeBody=$(this).attr('href');
	$('[data-tab="header"] a').each(function(index, el) {
		$(el).removeClass('active');
	});
	$(this).addClass('active');
	$('[data-tab="body"]').each(function(index, el) {
		$(el).removeClass('active');
	});
	$(activeBody).addClass('active');
});


// аккордеон в седьмой секции
// =====================================================================
! function(i) {
      var o, n;
      i(".title").on("click", function() {
        o = i(this).parents(".accordeon-block-item"), n = o.find(".content"),
          o.hasClass("active-toggle") ? (o.removeClass("active-toggle"),
            n.slideUp()) : (o.addClass("active-toggle"), n.stop(!0, !0).slideDown(),
            o.siblings(".active-toggle").removeClass("active-toggle").children(
              ".content").stop(!0, !0).slideUp())
      })
    }(jQuery);
