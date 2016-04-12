$(document).ready(function(){
	$('.bxslider').bxSlider({
		auto: true
	});

	$('.read-more').on('click', f_showOverText)
});

function f_showOverText() {
	$(this).find('.over-text').slideToggle(1000)
}