$(document).ready(function () {

	new WOW().init();

	$('.menu-toggle').click(function () {
		$(this).toggleClass('active');
		$(this).next('.menu').toggleClass('active');
	});

	
	$('#welcome').each(function(){
		var time = 8000;//倒數9秒
		!function MyCounter(){
		if(time<=0){
			window.location.href="index.html";
		}else{
			console.log((time/1000) + " sec...");
			setTimeout(MyCounter, 1000);
		}
		time-=1000; 
		}();
	});

	$(window).scroll(function () {
		if (jQuery(window).width() > 992 && $(this).scrollTop() > 100) {
			$("header").addClass("active");
		} else {
			$("header").removeClass("active");
		}
	});

	$('#home').each(function () {
		$(this).addClass('main-bg');
		$(this).next('footer').addClass('footer-bg1');
	});
	
	$('#money-note').each(function () {
		$(this).next('footer').addClass('footer-bg2');
		$(this).parent('body').addClass('bg-gary');
	});

	$('#login').each(function(){
		$(this).parent('body').addClass('bg-oglg');
		$(this).prev('header').addClass('bg-oglg');
		$(this).next('footer').hide();
	});

	$('#profile').each(function(){
		$(this).prev('header').find('.nav').hide();
		$(this).next('footer').hide();
	});

	$('#terms').each(function(){
		$(this).next('footer').addClass('footer-bg1');
		$(this).addClass('main-bg');
	});

	$('#invoices').each(function () {
		$(this).next('footer').addClass('footer-bg1');
		// $(this).next('footer').addClass('mt0');
		$(this).addClass('main-bg');
	});

	$('#invoice').each(function(){
		$(this).parent('body').addClass('yellow');
		$(this).prev('header').find('.nav').hide();
		$(this).next('footer').hide();
	});

	$('.list-toggle').click(function () {
		$(this).toggleClass('active');
		$(this).next('.list-info').slideToggle();
	});

	/* ==========================================================================
			datebox
	==========================================================================*/


	$('.date_box').each(function(){
		$('.input-date').datepicker({
			date: new Date,
			format: 'yyyy / mm / dd',
			autoPick: true
		});
		    
		var currentDay = new Date();
		var nextDay = new Date();
		var previousDay = new Date();

		$('.prev-day').each(function() {
			$(this).on("click", function () {
				
				if (nextDay > currentDay) {
					previousDay.setDate(nextDay.getDate() - 1);
				} else {
					previousDay.setDate(previousDay.getDate() - 1);
				}
				
				$('.input-date').datepicker("setDate", previousDay);
			});
		});
		
		$('.next-day').each(function() {
			$(this).on("click", function () {
				
				if (previousDay < currentDay) {
					nextDay.setDate(previousDay.getDate() + 1);
				} else {
					nextDay.setDate(nextDay.getDate() + 1);
				}
				
				$('.input-date').datepicker("setDate", nextDay);
			});
		});
	});


	/* ==========================================================================
			頁籤
	==========================================================================*/

	$(function () {
		var _showTab = 0;
		var $defaultLi = $('ul.cutover li').eq(_showTab).addClass('active');
		$($defaultLi.find('a').attr('href')).siblings().removeClass('show');

		$('ul.cutover li').click(function () {
			var $this = $(this),
				_clickTab = $this.find('a').attr('href');
			$this.addClass('active').siblings('.active').removeClass('active');
			$(_clickTab).stop(false, true).addClass('show').siblings().removeClass('show');

			return false;
		}).find('a').focus(function () {
			this.blur();
		});
	});

	/*document END*/
});