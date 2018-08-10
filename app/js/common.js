	
$(function() {

	  // slider slick
		$('.slider-wrap').slick({
			dots: true,
			infinite: true,
			speed: 600,
			slidesToShow: 1,
			fade: true,
			autoplay: true,
  		autoplaySpeed: 4000,
			adaptiveHeight: true
		});

	// menu
	$(".toggle-mnu").click(function() {
		$(".sandwich").toggleClass("active");
	});

	$(".hidden-mmu ul a").click(function() {
		$(".hidden-mmu").fadeOut(600);
		$(".sandwich").toggleClass("active");
	}).append("<span>");

	$(".toggle-mnu").click(function() {
		if ($(".hidden-mmu").is(":visible")) {
			$(".hidden-mmu").fadeOut(600);
			$(".hidden-mmu li a").removeClass("fadeInUp animated");
		} else {
			$(".hidden-mmu").fadeIn(600);
			$(".hidden-mmu li a").addClass("fadeInUp animated");
		};
	})  

	});

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "assets/app/mail.php", //Change
			data: th.serialize()
		}).done(function() {
			th.find(".success").addClass("active");
			setTimeout(function() {
				// Done Functions
				th.find(".success").removeClass("active");
				th.trigger("reset");
				$.magnificPopup.close();
			}, 3000);
		});
		return false;
	});

// preloader 
$(window).on('load', function() {
	$('.preloader').delay(1000).fadeOut('slow');

});



 