$(document).on('ready', function() {
console.log('test');


	$('.add').on('click', function() {

		$(this).parent().addClass('active').siblings().removeClass('active');

		console.log($(this).parent());
		$('.cForms').removeClass('hidden').each(function(el, index) {
			console.log($(this));
			$(this).siblings.addClass('hidden')
			

		});
			// console.log('unpaid');
	});

});