// var $ = require('jquery');


$(document).ready(function(){

	console.log("Hello there!");

	$("#profile-pic").css({ "top":"-400px"});
	$("#hello").css("left", "-700px");
	$("#summary p").css({"opacity":"0", "bottom":"-10px"});
	animate1();


	function animate1() {
		// drop in profile pic
		$("#profile-pic").animate({
			opacity: 1,
			top: 0
		}, 
		700,
		"easeOutBounce",
		function(){ animate2(); }
		);
	}
	function animate2() {
		// drop in profile pic
		$("#hello").animate({
			left: 0
		}, 
		800,
		"easeInOutBack",
		function(){ animate3() }
		);
	}	
	function animate3() {
		// fade in from bottom #summary's P tag
		$("#summary p").animate({
			opacity: 1,
			bottom: 0
		},
		1500,
		"easeOutCirc"
		)
	}
});