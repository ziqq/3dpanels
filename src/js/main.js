$(document).ready(function() {

	function wResize(){
		$('.header').css('height', $(window).height());
	};wResize();
	$(window).resize(function(){
		wResize();
	});

	function heightses() {
		// $(".benefits-item").height("auto").equalHeights();
		// $(".benefits-item__title").height("auto").equalHeights();
	}heightses();

	$(window).resize(function() {
		heightses();
	});

	if ($(window).height() > 768){
		$('.header-text').css('paddingTop', 185);
	}


	$('<div class="header__top_clone"></div>').insertBefore('.header__top').css('height', $('.header__top').outerHeight(true)).hide();
	$(window).scroll(function(){
		if($(window).width() > 480){
			if($(this).scrollTop() ){
				$('.header__top').addClass('fixed');
				$('.header__top_clone').show();
			}else{
				$('.header__top').removeClass('fixed');
				$('.header__top_clone').hide();
			}	
		}else{
			$('.header').css('height', 'auto');
			if($(this).scrollTop() ){
				$('.header__top').addClass('fixed');
				$('.header__top_clone').show();
			}else{
				$('.header__top').removeClass('fixed');
				$('.header__top_clone').hide();
			}				
		}			
	});

	$(".jsMobileMenuButton").click(function() {
		$('.toggle-mnu__wrap').toggleClass('active');
		return false;
	});	

	$('.nav').clone().appendTo('.toggle-mnu__wrap > div');	

	//GoTop
	$('.jsGoTo').click(function () {
		$('.jsGoTo').parent().removeClass('active');
		$(this).parent().addClass('active');

		var elementClick = $(this).attr("href");
		var destination = $(elementClick).offset().top;
		$('html, body').animate({ scrollTop: destination }, 800);
		return false; 
	});

	//ScrollSpy
	$(".nav").scrollspy({offset: -60});

	//Go Section
	$('.go-top').click(function() {
		$('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
	});
	$(window).scroll(function() {
		if ($(this).scrollTop() > $(window).height()) {
			$('.go-top').addClass("active");
		} else {
			$('.go-top').removeClass("active");
		};
	});

	$('.cashback-slider').slick({
		infinite: true,
		speed: 1500,
		autoplay: true,
		autoplaySpeed: 4000,
		fade: true,
		arrows: false
	});

	$('.jsPopup').magnificPopup({
		type: 'inline',

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-slide-bottom'
	});

	$('.js-custom-scroll').mCustomScrollbar();
	$(".form__input-phone").mask("+7(999) 999-99-99");

   	//SVG Fallback
   	if(!Modernizr.svg) {
   		$("img[src*='svg']").attr("src", function() {
   			return $(this).attr("src").replace(".svg", ".png");
   		});
   	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$(".header__form, .cashback__form, .callback__form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(th).find('.success').addClass('active').css('display', 'flex').hide().fadeIn();
			setTimeout(function() {
				th.trigger("reset");
				$(th).find('.success').removeClass('active').fadeOut();
			}, 2000);
			$.magnificPopup.close();
		});
		return false;
	});

	$(".questions__form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				
				th.trigger("reset");
			}, 2000);
			$.magnificPopup.close();
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});