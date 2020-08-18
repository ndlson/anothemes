(function($) {
	"use strict";
	$(document).ready(function() {
		$(".mobile-btn").click(function () {           
            $(this).parents().find('.main-menu').toggleClass('open');
            $( '.fadeout' ).show();
        });
        
		$('.custom-count').each(function () {
		  var $this = $(this);
		  jQuery({ Counter: 0 }).animate({ Counter: $this.attr('data-stop') }, {
		    duration: 4000,
		    easing: 'swing',
		    step: function (now) {
		      $this.text(Math.ceil(now));
		    }
		  });
		});

		$( '.fadeout' ).on('click',function(event) {
			event.preventDefault();
			$(this).parents().find( '.main-menu' ).removeClass('open');
			$(this).hide();
		});

        $(".right-header1").each(function (e) {
           $('.search').on('click',function(){	            
           		$(this).find( '.search-form' ).addClass('open');
           		$('.close').fadeIn(1);	            
           });
        });
        $('.close').on('click',function(){
	   		$( this ).parent().find('.search-form').removeClass('open');
	   		$( this ).fadeOut(0.5);	   		
	    });

		$(document).on( 
	     'keydown', function(event) { 
	        if (event.key == "Escape") { 
	             $( '.search-form' ).removeClass('open'); 
	        } 
	    }); 
	    
		$(".show-content li").mouseenter(function() {
			$(".show-image li").hide();
			$(".show-content li").removeClass('active');					
			$(this).addClass("active");					
			var selected_tab = $(this).attr("href");
			$(selected_tab).stop().fadeIn();
			return false;		
		});
		$(".show-content li").mouseleave(function() {
			var selected_tab = $(this).attr("href");
			$(selected_tab).stop().fadeOut();
		});

	    $(".btn-show").on('click',function() {
			$(this).toggleClass('open');
			$(this).parents().find('.show').toggleClass('open');
		});
		if( $( window ).width() < 1366 ) {
	    	$( '.menu-main li.has-sub' ).append('<i class="fa fa-caret-down"></i>');
	    }
	    $('.menu-main li.has-sub i').on('click', function(ev) {
            ev.preventDefault();
            $( this ).parents( '.has-sub' ).toggleClass( 'active' );
            $('.menu-main li.has-sub i').not( this ).parents( '.has-sub' ).removeClass( 'active' );
            $( this ).parents( '.has-sub' ).find( 'ul' ).slideToggle("2s");
            $('.menu-main li.has-sub i').not( this ).parents( '.has-sub' ).find( 'ul' ).slideUp("2s");
        });

		$('.learn .owl-carousel').owlCarousel({
		    loop:false,
		    margin:40,
		    dots:false,
		    nav:true,
		    navText: ['<i class="fa fa-long-arrow-left" aria-hidden="true"></i>', '<i class="fa fa-long-arrow-right" aria-hidden="true"></i>'],
		    responsive:{
		        0:{
		            items:1
		        },
		        768:{
		        	items:1
		        },
		        1024:{
		            items:4
		        },
		        1300:{
		            items:4
		        }
		    }
		});

		$('.event .owl-carousel').owlCarousel({
		    loop:true,
		    margin:40,
		    dots:false,
		    nav:true,
		    navText: ['<i class="fa fa-long-arrow-left" aria-hidden="true"></i>', '<i class="fa fa-long-arrow-right" aria-hidden="true"></i>'],
		    responsive:{
		        0:{
		            items:1
		        },
		        768:{
		        	items:1
		        },
		        1024:{
		            items:4
		        },
		        1300:{
		            items:4
		        }
		    }
		});

		$('.right-future .owl-carousel').owlCarousel({
		    loop:true,
		    margin:0,
		    dots:true,
		    nav:false,
		    navText: ['<i class="fa fa-long-arrow-left" aria-hidden="true"></i>', '<i class="fa fa-long-arrow-right" aria-hidden="true"></i>'],
		    responsive:{
		        0:{
		            items:1
		        },
		        768:{
		        	items:1
		        },
		        1024:{
		            items:1
		        },
		        1300:{
		            items:1
		        }
		    }
		});

		$('.brand .owl-carousel').owlCarousel({
		    loop:false,
		    margin:30,
		    dots:false,
		    nav:false,
		    navText: ['<i class="fa fa-long-arrow-left" aria-hidden="true"></i>', '<i class="fa fa-long-arrow-right" aria-hidden="true"></i>'],
		    responsive:{
		        0:{
		            items:2
		        },
		        768:{
		        	items:2
		        },
		        1024:{
		            items:5
		        },
		        1300:{
		            items:5
		        }
		    }
		});

		$('.list-item-team').owlCarousel({
		    loop:true,
		    margin:32,
		    nav:true,
		    dots:false,
		    navText: ['<i class="fa fa-long-arrow-left" aria-hidden="true"></i>', '<i class="fa fa-long-arrow-right" aria-hidden="true"></i>'],
		    responsive:{
		        0:{
		            items:1
		        },
		        768:{
		            items:3
		        },
		        1300:{
		            items:4
		        }
		    }
		});
		
		$('.list-people').owlCarousel({
		    loop:true,
		    margin:32,
		    nav:false,
		    dots: true,
		    center: true,
		    navText: ['<i class="fa fa-long-arrow-left" aria-hidden="true"></i>', '<i class="fa fa-long-arrow-right" aria-hidden="true"></i>'],
		    responsive:{
		        0:{
		            items:1,
		            
		        },
		        600:{
		            items:2,		
		            center: false,
		        },
		        1300:{
		            items:3
		        }
		    }
		});

        $('.back-to-top').click(function(event) {
            $('html,body').animate({scrollTop: 0},1400);
        });

        $( '.popup-callback' ).on( 'click', function(event) {
            event.preventDefault();
            var id = $( this ).attr( 'href' );
            $( id ).addClass( 'open' );
        });

        $( '.popup-close' ).on( 'click', function(event) {
            event.preventDefault();
            $( this ).parents( '.popup-modal' ).removeClass( 'open' );
        });
        $( '.popup-bg' ).on( 'click', function() {
			$( this ).parent().removeClass( 'open' );
		});

        /*  [ Tabs ]
        - - - - - - - - - - - - - - - - - - - - */
        

        /*WOW JS*/
        new WOW().init();
	});

})(jQuery);
