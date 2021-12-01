$(function() {
	var header = $("#header"), introH = $("#intro").innerHeight();
	var scrollOffset = $(window).scrollTop();
	
	/* header fixed */
	checkScroll(scrollOffset);
	
	$(window).on("scroll", function() {
		scrollOffset = $(this).scrollTop();
		
		checkScroll(scrollOffset);
	});
	
	function checkScroll(scrollOffset) {
		if(scrollOffset >= introH) {
			header.addClass("fixed");
		}
		else {
			header.removeClass("fixed");
		}
	}
	
	/* smooth scroll */
	$("[data-scroll]").on("click", function(event) {
		event.preventDefault();
		
		var $this = $(this),
			blockId = $this.data('scroll'), 
			blockOffset = $(blockId).offset().top;
			
		$("#nav a").removeClass("active");
		$this.addClass("active");

		$("#nav").removeClass("active");
		
		$("html, body").animate({
			scrollTop: blockOffset
		}, 500);
	});
	
	$('#button')[0].addEventListener('click', function () {
		$('#blackout')[0].hidden = false;
	});

	/* menu nav toggle */
	$("#nav_toggle").on("click", function(event) {
		event.preventDefault();

		$(this).toggleClass("active");
		$("#header").addClass("fixed");
		$("#nav").toggleClass("active");
		
	});

	calc.onclick = function(){
		var myform = this.form;
		myform.result.value = +myform.choice1.value + +myform.choice2.value + +myform.choice3.value + +myform.choice4.value + +myform.choice5.value;
	}



});
