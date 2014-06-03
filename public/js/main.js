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

	$(document).on('change', '.courier-select', function() {
		// console.log($(this).val());
		var selected = $(this).val();
		console.log(selected);
		for (var i = 0; i < couriers.length; i++) {
			if(selected === couriers[i].name) {
				$('[name="capableAreasEdit"]').val(couriers[i].capableAreas);
				// $('[name="capableAreasEdit"]').attr("value", couriers[i].capableAreas);
				console.log(couriers[i].capableAreas);
				$('[name="defaultAreasEdit"]').val(couriers[i].defaultAreas);
				console.log(couriers[i].defaultAreas);

			}
		};

	});
});