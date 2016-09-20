$(document).foundation();

$(document).ready(function() {
	$('#menuToggle').click(function() {
		$("#submenu").slideUp();

		if(!$(this).next().is(":visible")) 
			{
				$(this).next().slideDown();
			}
	});

	$('.photoGallery').slick({
		lazyLoad: 'ondemand',
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		autoplay: true,
		autoplaySpeed: 6500,
		nextArrow: '<button type="button" class="slick-next"><i class="fa fa-arrow-circle-right fa-3x" aria-hidden="true"></i></button>',
		prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-arrow-circle-left fa-3x" aria-hidden="true"></i></button>',

		responsive: [
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						arrows: false
					}
				}
			]
		});
});