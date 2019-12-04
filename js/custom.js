
$(window).on('load', function(){
	$('body').removeClass('loaded');
});

function scrolled(o){

	if(o.scrollLeft > 1 ){
		$(o).parent().addClass('scroll-start')
	} else {
		$(o).parent().removeClass('scroll-start')
	}
	if(o.offsetWidth + o.scrollLeft == o.scrollWidth){
		$(o).parent().addClass('scroll-end')
	} else {
		$(o).parent().removeClass('scroll-end')
	}
}
$(function(){

	
	/* Base */
	/* ---------------------------------------------- */

	
	function openUserMenu() {	
		$(".toggle-menu").on('click',function(){
			$('.nav-menu-container').toggleClass("is-open");
			$('body').addClass('lock');
		});

		$(document).on('click', '.nav-menu-container, .nav-menu-container .container', function(e){
			if (e.target !== this) 
				return;
			$('.nav-menu-container').removeClass('is-open');
			$('body').removeClass('lock');
			return false;
		});

		$(".nav-menu__close").on('click',function(){
			$('.nav-menu-container').removeClass("is-open");
			$('body').removeClass('lock');
		});
	}

	openUserMenu();

	function openFilter() {	
		$(".open-filter").on('click',function(){
			$('body').addClass('lock');
			$('.filter-wrapper').toggleClass("is-open");
			
		});

		$(document).on('click', '.filter-wrapper, .filter-wrapper .container', function(e){
			if (e.target !== this) 
				return;
			$('.filter-wrapper').removeClass('is-open');
			$('body').removeClass('lock');
			return false;
		});

		$(".filter__close").on('click',function(){
			$('body').removeClass('lock');
			$('.filter-wrapper').removeClass("is-open");
			
		});
	}

	openFilter();

	function openMobileMenu() {	
		$('.m-menu li:not(.m-menu__item).dropdown > a').on('click', function(){
			$(this).closest('.m-sub-menu').addClass('is-sub-menu-open')
			$(this).parent().addClass('is-active')

			return false;
		});

		$('li:not(.m-menu__item).dropdown > .m-sub-menu > .m-sub-menu__header .m-menu-back').on('click', function(){
			$(this).closest('li.dropdown').removeClass('is-active')
			$(this).closest('li.dropdown').closest('.m-sub-menu').removeClass('is-sub-menu-open')
			return false;
		});

		$('.m-menu .m-menu__item.dropdown > a').on('click', function(){
			$('.nav-menu').addClass('is-menu-open');
			$(this).parent().addClass('is-active');
			return false;
		});

		$('.m-menu__item > .m-sub-menu > .m-sub-menu__header .m-menu-back').on('click', function(){
			$('.nav-menu').removeClass('is-menu-open');
			$(this).parents('li.dropdown').removeClass('is-active')
			return false;
		});
	}
	openMobileMenu();

	function openMobileLoginForm() {
		$('.open-login-form').on('click',function(){
			$('.nav-menu__form').toggleClass('hidden-md')
		})
	}

	openMobileLoginForm()

	function showMoreTextMobile() {
    	var htTu = $('.mobile-text-short').height();
	    if(htTu < 450) {
	    	$('.mobile-text-short').addClass('open')
	    	$('.mobile-text-open').hide()
	    }
    	$('.mobile-text-open a').on('click', function(){
	    	$(this).parents().prev('.mobile-text-short').toggleClass('open');
	    	// $(this).next().slideToggle(400);
	        namebl = $(this).html();
	        if(namebl == 'Развернуть описание'){
	            $(this).html('Cвернуть');
	        }else{
	           $(this).html('Развернуть описание');
	        }
	    	return false;
	    });

    }
    showMoreTextMobile();

    function showMoreText() {
    	$('.text-open a').on('click', function(){
	    	$(this).parents('.text-wrap').toggleClass('is-open');
	    	
	        namebl = $(this).html();
	        if(namebl == 'Развернуть описание'){
	            $(this).html('Cвернуть');
	        }else{
	           $(this).html('Развернуть описание');
	        }
	    	return false;
	    });
    }
    showMoreText();

    function openSidebarMenu() {
		$('.s-dropdown > a').on('click', function(){
			$(this).parent().toggleClass('is-active')
			return false;
		});

	}
	openSidebarMenu();

	function openAllNavFilter() {
		$('.view-more').on('click', function(){
			namebl = $(this).html();
			if(namebl == '+ Ещё'){
				$(this).html('Cвернуть');
				$(this).parents('.filter__item').find('.is-hidden').removeClass('is-hidden').addClass('i-visible')
			}else{
				$(this).html('+ Ещё');
				$(this).parents('.filter__item').find('.i-visible').removeClass('i-visible').addClass('is-hidden')
			}
			
			return false;
		});

	}
	openAllNavFilter();

	function dopBlock() {
		$(".drop-button").on('click',function(){
			$(this).toggleClass("is-active").parent().toggleClass('is-open');
			$('.overlay').show();
			
		});

		$(".drop-menu li").on('click',function(){
			var thisBlock = $(this)
			var thisHtml = $(this).html()
			$(this).parent().find('li').not(thisBlock).removeClass('is-active')
			$(this).addClass("is-active");
			$(this).closest('.drop').addClass('is-change').find('.drop-button').html(thisHtml)

			$(this).closest('.drop').removeClass("is-open").find('.drop-button').removeClass('is-active');
			$('.overlay').hide();
		});
		$(document).on('click', '.overlay', function(e){
			if (e.target !== this) 
				return;
			$(".drop-button").removeClass("is-active").parent().removeClass('is-open');
			$('.overlay').hide();
			return false;
		});
	}

	dopBlock();

	/* Tabs */
	/* ---------------------------------------------- */
	$('.tabs a').on('click', function(){
		$(this).parents('.tab-wrap').find('.tab-cont').addClass('is-hidden');
		$(this).parent().siblings().removeClass('is-active');
		var id = $(this).attr('href');
		$(id).removeClass('is-hidden');
		$(this).parent().addClass('is-active');
		$('.tab-wrap .slick-slider').slick('setPosition')
		return false
	});

	/* Counter */
	/* ---------------------------------------------- */
	$('.js-minus').click(function () {
		var $input = $(this).parent().find('input');
		var count = parseInt($input.val()) - 1;
		count = count < 1 ? 1 : count;
		$input.val(count);
		$input.change();
		return false;
	});
	$('.js-plus').click(function () {
		var $input = $(this).parent().find('input');
		$input.val(parseInt($input.val()) + 1);
		$input.change();
		return false;
	});

	/* Forms  */
	/* ---------------------------------------------- */
	$('.form-input').focus(function(){
		var label = $(this).prev('.label');
		var value = $(this).val();

		if(value == ''){
			label.stop().css({ 'top': '0', });
			$(this).parent().addClass('focus')
		} else {
			label.css({ 'top': '0' });

		}
	}).blur(function(){
		var label = $(this).prev('.label');
		var value = $(this).val();
		var full = value.replace(/\+7\(\d{3}\) \d{3} \d{4}/g, "")=="" ? true: false;
		if ($(this).hasClass('tel')) {
		    if(value == '' || !full){
		      label.stop().css({ 'top': '1rem', });
		      $(this).parent().removeClass('focus')
		    }
		   } else {
		   	 if(value == ''){
		      label.stop().css({ 'top': '1rem', });
		      $(this).parent().removeClass('focus')
		    }
		   }

	});

	$('.promocode input').focus(function(){
		var label = $(this).prev('.label');
		var value = $(this).val();

		if(value == ''){
			label.stop().css({ 'display': 'none', });
			$(this).parent().addClass('focus')
		} else {
			label.css({ 'display': 'none' });

		}
	}).blur(function(){
		var label = $(this).prev('.label');
		var value = $(this).val();
		if(value == ''){
			label.stop().css({ 'display': 'block', });
			$(this).parent().removeClass('focus')

		} 
	});




	/* Plugins */
	/* ---------------------------------------------- */

	/* Styler */
	if($('.styler').length){
		$('.styler').styler({
			singleSelectzIndex: '5',
		});
	};

	/* MASK */
	
	$('input.tel').inputmask('+7(999) 999 9999',{
		clearIncomplete: true,
		clearMaskOnLostFocus: true,
		showMaskOnHover: false,

	});

	
	/* Slick Slider */

	if($('.banner-slider').length){

		$('.banner-slider').after('<div class="banner-slider__pagination"><div class="container"></div></div>').slick({
			appendArrows: '.banner-slider__pagination .container',
			prevArrow: '<button class="slick-arrow slick-prev"><svg class="icon icon-arrow-left"><use xlink:href="#icon-arrow-left"></use></svg></button>',
			nextArrow: '<button class="slick-arrow slick-next"><svg class="icon icon-arrow-right"><use xlink:href="#icon-arrow-right"></use></svg></button>',
			fade: true,
			adaptiveHeight: true,
		});
	};

	if($('.brands-slider').length){

		$('.brands-slider').slick({
			arrows: false,
			slidesToShow: 6,
			slidesToScroll: 1,

			autoplay: true,

			responsive: [{
				breakpoint: 1199, 
				settings: {
					slidesToShow: 5,
					slidesToScroll: 1,
				} 
			},
			{
				breakpoint: 767, 
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				} 
			},
			{
				breakpoint: 574, 
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				} 
			}]

		});
	};

	if($('.action-slider').length){

		$('.action-slider').slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			infinite: false,
			appendArrows: '.action-slider-pagination',
			prevArrow: '<button class="slick-arrow slick-prev"><svg class="icon icon-arrow-left"><use xlink:href="#icon-arrow-left"></use></svg></button>',
			nextArrow: '<button class="slick-arrow slick-next"><svg class="icon icon-arrow-right"><use xlink:href="#icon-arrow-right"></use></svg></button>',
			responsive: [{
				breakpoint: 991, 
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				}
			},{
				breakpoint: 767, 
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				} 
			},{
				breakpoint: 574, 
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				} 
			}]
		});
	};
	if($('.new-slider').length){
		$('.new-slider').slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			infinite: false,
			appendArrows: '.new-slider-pagination',
			prevArrow: '<button class="slick-arrow slick-prev"><svg class="icon icon-arrow-left"><use xlink:href="#icon-arrow-left"></use></svg></button>',
			nextArrow: '<button class="slick-arrow slick-next"><svg class="icon icon-arrow-right"><use xlink:href="#icon-arrow-right"></use></svg></button>',
			responsive: [{
				breakpoint: 991, 
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				}
			},{
				breakpoint: 767, 
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				} 
			},{
				breakpoint: 574, 
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				} 
			}]
		});
	};
	if($('.best-slider').length){

		$('.best-slider').slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			infinite: false,
			appendArrows: '.best-slider-pagination',
			prevArrow: '<button class="slick-arrow slick-prev"><svg class="icon icon-arrow-left"><use xlink:href="#icon-arrow-left"></use></svg></button>',
			nextArrow: '<button class="slick-arrow slick-next"><svg class="icon icon-arrow-right"><use xlink:href="#icon-arrow-right"></use></svg></button>',
			responsive: [{
				breakpoint: 991, 
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				}
			},{
				breakpoint: 767, 
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				} 
			},{
				breakpoint: 574, 
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				} 
			}]
		});
	};

	if($('.news-slider').length){

		$('.news-slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: false,
			fade: true,
			appendArrows: '.news-slider-pagination',
			prevArrow: '<button class="slick-arrow slick-prev"><svg class="icon icon-arrow-left"><use xlink:href="#icon-arrow-left"></use></svg></button>',
			nextArrow: '<button class="slick-arrow slick-next"><svg class="icon icon-arrow-right"><use xlink:href="#icon-arrow-right"></use></svg></button>',
			
		});
	};

	if($('.card-inner-slider').length){

		$('.card-inner-slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: false,
			fade: true,
			appendArrows: '.card-inner-slider-pagination',
			prevArrow: '<button class="slick-arrow slick-prev"><svg class="icon icon-arrow-left"><use xlink:href="#icon-arrow-left"></use></svg></button>',
			nextArrow: '<button class="slick-arrow slick-next"><svg class="icon icon-arrow-right"><use xlink:href="#icon-arrow-right"></use></svg></button>',
			
		});
	};

	if($('.similar-products-slider').length){

		
		$('.similar-products-slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			rows: 4,
			slidesPerRow: 1,
			infinite: false,
			fade: true,
			appendArrows: '.similar-products-slider-pagination',
			prevArrow: '<button class="slick-arrow slick-prev"><svg class="icon icon-arrow-left"><use xlink:href="#icon-arrow-left"></use></svg></button>',
			nextArrow: '<button class="slick-arrow slick-next"><svg class="icon icon-arrow-right"><use xlink:href="#icon-arrow-right"></use></svg></button>',
			responsive: [{
				breakpoint: 991, 
				settings: {
					rows: 1,
					// slidesToShow: 3,
					slidesToScroll: 1,

				}
			
			}]
		});
	};

	if($('.s-best-product-slider').length){

		
		$('.s-best-product-slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: false,
			fade: true,
			appendArrows: '.s-best-product-slider-pagination',
			prevArrow: '<button class="slick-arrow slick-prev"><svg class="icon icon-arrow-left"><use xlink:href="#icon-arrow-left"></use></svg></button>',
			nextArrow: '<button class="slick-arrow slick-next"><svg class="icon icon-arrow-right"><use xlink:href="#icon-arrow-right"></use></svg></button>',
			
		});
	};

	/*  Ползунок ================*/
	if($("#range" ).length>0){
		$("#range" ).slider({
			range: true,
			min: 0,
			max: 1100,
			values: [200, 900],
			slide: function( event, ui ){
				$('#rangefrom').val(ui.values[0]);
				$('#rangeto').val(ui.values[1]);

				$('.count1').text(ui.values[0]);
				$('.count2').text(ui.values[1]);
				
			},

		});
		$('#rangefrom').val($( "#range" ).slider( "values", 0 ));
		$('#rangeto').val($( "#range" ).slider( "values", 1 ));

		$('.count1').text($( "#range" ).slider( "values", 0 ));
		$('.count2').text($( "#range" ).slider( "values", 1 ));

		
		// $( "#rangefrom" ).on("input", function(){
		// 	if($(this).val()*1>$( "#range" ).slider( "option","max")*1){
		// 		$(this).parent().find('.count1').text($( "#range" ).slider( "option","max"));
		// 		$(this).val($( "#range" ).slider( "option","max"));
		// 	}
		// 	if($(this).val()*1<$( "#range" ).slider( "option","min")*1){
		// 		$(this).parent().find('.count1').text($( "#range" ).slider( "option","min"));
		// 		$(this).val($( "#range" ).slider( "option","min"));
		// 	}
		// 	$("#range" ).slider( "values",0,$(this).val().parents('.range__item').find('.count1').text());
			
		// });
		// $( "#rangeto" ).on("input", function(){
		// 	if($(this).val()*1>$( "#range" ).slider( "option","max")*1){
		// 		$(this).parent().find('.count2').text($( "#range" ).slider( "option","max"));
		// 		$(this).val($( "#range" ).slider( "option","max"));
		// 	}
		// 	if($(this).val()*1<$( "#range" ).slider( "option","min")*1){
		// 		$(this).parent().find('.count2').text($( "#range" ).slider( "option","min"));
		// 		$(this).val($( "#range" ).slider( "option","min"));
		// 	}
		// 	$("#range" ).slider( "values",1,$(this).val().parents('.range__item').find('.count2').text());

		// });

	}

});

function getYaMap(){
	if($('#map').length){
	ymaps.ready(init); // карта соберется после загрузки скрипта и элементов
		var myMap1; // заглобалим переменную карты чтобы можно было ею вертеть из любого места
		function init () { // функция - собиралка карты и фигни
			var myMap = new ymaps.Map("map", {
				center: [55.707555, 37.651314], 
				zoom: 15,
				controls: ['geolocationControl', 'zoomControl']
			});
			myMap.behaviors.disable('scrollZoom', 'drag'); 

			myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
			// hintContent: 'Собственный значок метки',
			// balloonContent: 'Это красивая метка'
			}, {
			// Опции.
			// Необходимо указать данный тип макета.
			iconLayout: 'default#image',
			// Своё изображение иконки метки.
			iconImageHref: 'img/pin.png',
			// Размеры метки.
			iconImageSize: [50, 64],
			// Смещение левого верхнего угла иконки относительно
			// её "ножки" (точки привязки).

			})

			/* Добавляем метки на карту */
			myMap.geoObjects.add(myPlacemark);
		}

	}
}