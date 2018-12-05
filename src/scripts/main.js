// Main
$(document).ready(function () {
	$('.slider1').owlCarousel({
		loop:true,
		margin:10,
		nav:true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:1
			}
		}
	})
	$('.slider2').owlCarousel({
		stagePadding: 150,
		loop:true,
		margin:10,
		nav:true,
		dots:false,
		center: true,
		items:3,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:1
			}
		}
	})
});
