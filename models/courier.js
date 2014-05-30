var mongoose =  require('mongoose');

var Courier = mongoose.model('courier', {
	name: String,
 	capableAreas: Array,
 	defaultAreas: Array,
 	daily: Array 
});

module.exports = Courier;
	