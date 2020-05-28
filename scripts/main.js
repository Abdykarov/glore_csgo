document.addEventListener('DOMContentLoaded', () => {
			console.log('works');
			//load animation
			anime.timeline({
				easing: 'easeOutExpo',
			})
			.add({
				targets: '.logo_image',
				opacity: [0,1],
				width: ['0px', '100px'],
				delay: '500ms',
			})
			.add({
				targets: 'header nav ul li a',
				opacity: [0,1],
				translateX: [-100,0],
				delay: (el,i) => 100 * i,
				offset: '-=800',
			})
			.add({
				targets: '.header_link',
			    opacity: [0,1],
				translateX: [-200,0],
				delay: (el,i) => 100 * i,
				offset: '-=900',
			})
			
			.add({
				targets: '.header_block p',
				opacity: [0,1],
				translateX: [-100,0],
				delay: (el,i) => 100 * i,
				offset: '-=900',
			})

			.add({

			})
			
		});
$(document).ready(function function_name(argument) {
	// body...
	$('.sponsores_block').slick({
	  slidesToShow: 5,
	  
	  slidesToScroll: 1,
	  autoplay: true,
	  autoplaySpeed: 2000,
	});
});