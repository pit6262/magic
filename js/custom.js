
$(window).on('load', function(){
	$('body').removeClass('loaded');
});

$(function(){

	/* Burger */
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

	/* Plugins */
	/* ---------------------------------------------- */

	/* Styler */
	if($('.styler').length){
		$('.styler').styler();
	};

	/* Styler */

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

	

});