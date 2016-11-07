// var $ = require('jquery');
require('gridfolio'); //node-modules/gridfolio/dist/

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
		900,
		"easeOutBounce",
		function(){ animate3(); }
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
		800,
		"easeOutCirc"
		)
	}


	var gridfolio = new Gridfolio({
		container: '#gridfolio-container',
		options: {
			animateIntoView: true,
			breakpoints: [
				{minWidth: 0, gridWidth: 1 },
				{minWidth: 480, gridWidth: 2 },
				{minWidth: 768, gridWidth: 3 },
				{minWidth: 1024, gridWidth: 4 }
			],
			scaleFonts: true,
			theme: 'warhol'
		},
		blocks: [
			{
				title: 'Project Title',
				description: 'First one was with doing some fishing equipment site.',
				url: 'http://skullcandy.com',
				tags: ['html5', 'css3', 'javascript'],
				classname: ''
			},
			{
				title: 'Project Title',
				description: 'First one was with doing some nets.',
				url: 'http://skullcandy.com',
				tags: ['html5', 'css3', 'javascript'],
				classname: ''
			},
			{
				title: 'Project Title',
				description: 'First one was with doing some nets.',
				url: 'dosunco/index.html',
				tags: ['html5', 'css3', 'javascript'],
				classname: ''
			},
			{
				title: 'Project Title',
				description: 'First one was with doing some nets.',
				url: 'http://skullcandy.com',
				tags: ['html5', 'css3', 'javascript'],
				classname: ''
			},
		]

	});





});