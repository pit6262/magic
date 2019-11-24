
$(window).on('load', function(){
	$('body').removeClass('loaded');
});

$(function(){

	/* Burger */
	/* ---------------------------------------------- */

	$(".toggle-menu").on('click',function(){
		$(this).find(".burger__icon").toggleClass("open");
	});


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
		});
	};

	if($('.brands-slider').length){

		$('.brands-slider').slick({
			arrows: false,
			slidesToShow: 6,
			slidesToScroll: 6,
			infinite: false,
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
			
		});
	};

	if($('.news-slider').length){

		$('.news-slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: false,
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
			appendArrows: '.card-inner-slider-pagination',
			prevArrow: '<button class="slick-arrow slick-prev"><svg class="icon icon-arrow-left"><use xlink:href="#icon-arrow-left"></use></svg></button>',
			nextArrow: '<button class="slick-arrow slick-next"><svg class="icon icon-arrow-right"><use xlink:href="#icon-arrow-right"></use></svg></button>',
			
		});
	};

	

});