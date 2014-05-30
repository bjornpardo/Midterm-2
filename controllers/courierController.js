var Courier = require('../models/courier.js');

var courierController = {

	create: function(req, res) {

		var courier= new Courier({
			name: req.body.name,
			capableAreas: req.body.capableAreas,
			defaultAreas: req.body.defaultAreas
		});

		courier.save(function(err, data) {
			if(err) {
				console.log(err);
				res.send(500, 'There was an error creating');
				return;
			}

			res.send(201, 'Success!');
			// res.redirect('/courier');
		})
	}

};

module.exports = courierController;

