$('.team-carousel').slick({
	arrows: false,
    autoplaySpeed: 3000,
	autoplay: true,
	mobileFirst: true,
	pauseOnFocus: true,
	// infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 2,
				// slidesToScroll: 2,
			},
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 3,
			},
		},
	],
});
