// ======== slick slider ===============
// http://kenwheeler.github.io/slick/
$(window).on("load", function() {
	    var slider = $(".slider");
	    slider.slick({
	        //draggable: !1,
	        arrows: !1,
	        slidesToShow: 10,
			slidesToScroll: 1,
	        autoplay: true,
	        autoplaySpeed:1000,
	          responsive: [
			    {
			      breakpoint: 1200,
			      settings: {
			        slidesToShow: 5,
			        slidesToScroll: 1
			      }
			    },
			    {
			      breakpoint: 667,
			      settings: {
			        slidesToShow: 3,
			        slidesToScroll: 1
			      }
			    },
			    {
			      breakpoint: 480,
			      settings: {
			        slidesToShow: 2,
			        slidesToScroll: 1
			      }
			    }
			  ]
	    });
	  });

$('.reviews').slick({
  arrows: !1,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
});
// ============================OPEN BASKET====================================
$("#js-mobile-button").on("click", function(e){
	e.preventDefault();
	$(".basket, .overlay").fadeIn();
});
// ============================CLOSE BASKET====================================
$(".fa-external-link-alt").on("click", function(e){
	e.preventDefault();
	$(".basket, .overlay").fadeOut();
});

// ============= MENU SLIDE TOGGLE =============================================
$(".fa-bars").on("click", function(e){
	e.preventDefault();
	$(".top-menu").slideToggle();
});

