jQuery(function(){

    "use strict";


    //Dropdown Menu
    $('.dropdown').hover(function() {
        $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(200);
    }, function() {
        $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(200);
    });

    //Home injury Section Slider
    $('.injury-type-slide').owlCarousel({
    	loop:true,
    	margin:48,
    	nav:true,
    	responsive:{
        	0:{
            	items:1
        	},
        	600:{
            	items:3
        	},
        	1000:{
            	items:3
        	}
    	}
	});

	//Home Services Section Slider
    $('.home-services-slider').owlCarousel({
    	loop:true,
    	margin:20,
    	nav:true,
    	responsive:{
        	0:{
            	items:1
        	},
        	600:{
            	items:3
        	},
        	1000:{
            	items:3
        	}
    	}
	});


    // Burger Menu Hide or Show
	$('.burger-btn').on('click', function(){
		document.getElementById("burger-menu").style.height = "100%";
		$('body').css('overflow', 'hidden');
	});
	$('.close-burger-menu').on('click', function(){
		document.getElementById("burger-menu").style.height = "0%";
        $('body').css('overflow', 'visible');
	});

});