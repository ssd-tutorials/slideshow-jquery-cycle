function setCaption(currSlideElement, nextSlideElement, options, forwardFlag) {
	$(currSlideElement).children('.gallery-caption').animate({ top : '347px' }, 500, function() {
		var captionHeight = $(nextSlideElement).children('.gallery-caption').height();
		var galleryHeight = $('#gallery').height();
		var newCaptionHeight = galleryHeight - captionHeight - 15;
		$(nextSlideElement).children('.gallery-caption').delay(100).animate({ top : newCaptionHeight }, 500);
	})
}
$(document).ready(function() {

	$('#gallery-photos').cycle({
		before: setCaption,
		fx: 'fade',
		pager: '#gallery-navigation',
		activePagerClass: 'active',
		timeout: 8000,
		delay: 2000,
		manualTrump:false
	});

});




