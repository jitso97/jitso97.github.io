$(function() {
	// $("header").css({
	// 	"bottom": "40px"
	// });
	// $(".navigation_wrapper").css({
	// 	"top": "40px"
	// });

	var mode ="";
	// if($(window).width()<576){
	// 	mode = "mobile";
	// }else { mode = "non-mobile"; }
	animate1();

	function animate1() {
		$("header").animate({
			opacity: 1,
			bottom: 0
		},
		1200,
		"easeInOutExpo"
		)
		$(".navigation_wrapper").animate({
			opacity: 1,
			top: 0
		},
		1200,
		"easeInOutExpo",
		function(){ animate2()}
		)
	}
	function animate2() {
		$(".main_content").animate({
			opacity: 1,
		},
		1400,
		"easeInOutExpo"
		)
	}

	$("#nav_menu").on("click", function(event){
		// console.log("menu was clicked");
		event.preventDefault();
		$("#menu_wrapper").show().animate({
			opacity: 1,
			top: "0px"
		},
		500);

	});
	$("#nav_map").on("click", function(event){
		console.log("map was clicked");
		event.preventDefault();
		$("#map_overlay").hide();
		$("#map_wrapper").show().animate({
			opacity: 1,
			top: "0px"
		},
		500);

	});


	$(".close_menu").on("click", function(){

		$(this).parent().animate({

			opacity: 0,
			top: "20px"
		},
		500, function(){  $(this).hide(); });
	});


	// get width window width info
	$(window).resize(function(){
		console.log($(window).height());

		if($(window).width() >= 576){
			if(mode != "non_mobile"){ 
				console.log("now in tablet or desktop and layout need to set to NON-MOBILE");
				mode ="non_mobile";
				set_to_non_mobile();
			}

		}
		else if ($(window).width() <576) {
			if(mode != "mobile"){ 
				console.log("now in MOBILE and layout need to set to MOBILE");
				mode = "mobile";
				set_to_mobile();
			}
			
		}
		console.log("mode is now:  " + mode);
	});
	
	function set_to_mobile() {
		$("#menu_wrapper, #map_wrapper, #contact_wrapper").css({
			opacity: 0,
			top: "20px",
			display: "none"
		});
	}
	function set_to_non_mobile() {
		$("#menu_wrapper, #map_wrapper, #contact_wrapper").css({
			opacity: 1,
			top: 0,
			display: "block"
		});
	}

});