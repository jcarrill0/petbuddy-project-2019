(function ($) { "use strict";


	/* ========================================================================= */
	/*	Partners Carousel
	/* ========================================================================= */
	$('.slide-partner').slick({
    	lazyLoad: 'ondemand',
    	infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        spedd: 50,
        arrows: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
	});


	/* ========================================================================= */
	/*	Scrolling Effect del nav-header
	/* ========================================================================= */

	// $(window).scroll(function (){
	// 	if( $(this).scrollTop() > 100){
	// 		$('#nav-header').addClass("header-color");
	// 	}else {
	// 		$('#nav-header').removeClass("header-color");
	// 	}
	// });


	$(window).on("scroll", function() {
		console.log($(window).scrollTop());
	    if($(window).scrollTop() > 120) {
	          $('#nav-header').addClass('header-color');	
	    }
	    else {
	          $('#nav-header').removeClass('header-color');
	    }
	});


	/* ========================================================================= */
	/*	Nombre Script
	/* ========================================================================= */
	



})(jQuery);