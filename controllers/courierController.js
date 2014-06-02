var Courier = require('../models/courier.js');

var courierController = {

	index: function(req, res) {
		var courierNames = [];
		var returnCouriers = Courier.find({name:{$exists:true}},function(err,docs){
			// console.log(docs.name);
			for (var i = 0; i < docs.length; i++) {
				courierNames.push(docs[i].name);
			};
			console.log(courierNames);
			res.render('courier',{names:courierNames});
		});
			
	},


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
	},

	update: function(req, res) {
		var cAreas = req.body.capableAreas
		var dAreas = req.body.defaultAreas

		var findCourier = Courier.update({name: req.body.name}, {$set: {capableAreas: cAreas, defaultAreas: dAreas}},function(err,doc) {
				if (err) {
					throw err;
				}

				res.send(201, 'Success!');
		});
	}

};

module.exports = courierController;

