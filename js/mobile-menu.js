$(function(){
	$('.mobile-nav-trigger').on('click', function(){
		$(this).parents('.responsive_nav').siblings('.right_nav').toggleClass('mobile-nav-open');
	});
});