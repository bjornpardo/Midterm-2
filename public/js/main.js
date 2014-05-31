$(document).on('ready', function() {
console.log('test');


	$('.add').on('click', function() {
		console.log($(this).attr('class'));
		var clicked = $(this).attr('class');

		$(this).parent().addClass('active').siblings().removeClass('active');

		console.log($(this).parent());
		$('.cForms').addClass('hidden').each(function(el, index) {
			console.log($(this));
			console.log(clicked);
			if($(this).attr('id')===clicked){
				$(this).removeClass('hidden')
			}
		});
	});

	$('.edit').on('click', function() {
		var clicked = $(this).attr('class');

		$(this).parent().addClass('active').siblings().removeClass('active');

		console.log($(this).parent());
		$('.cForms').addClass('hidden').each(function(el, index) {
			console.log($(this));
			if($(this).attr('id')===clicked){
				$(this).removeClass('hidden')
			}
		});
	});
});