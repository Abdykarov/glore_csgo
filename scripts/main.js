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
				targets: '.header_title h1',
			    opacity: [0,1],
				translateX: [-200,0],
				delay: (el,i) => 100 * i,
				offset: '-=900',
			})
			
			.add({
				targets: '.header_title p',
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
	  responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 4,
	        slidesToScroll: 1,
	        infinite: true,
	      }
	    },
	    {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1
	      }
	    }
	    // You can unslick at a given breakpoint now by adding:
	    // settings: "unslick"
	    // instead of a settings object
	  ]
	});
	$('.matches_row').slick({
	  dots: true,
	  infinite: false,
	  speed: 300,
	  slidesToShow: 3,
	  arrows: false,
	  slidesToScroll: 3,
	  responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2,
	        infinite: true,
	        dots: true
	      }
	    },
	    {
	      breakpoint: 800,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    },
	  
	    // You can unslick at a given breakpoint now by adding:
	    // settings: "unslick"
	    // instead of a settings object
	  ]
	});
});