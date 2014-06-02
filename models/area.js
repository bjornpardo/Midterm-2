var mongoose =  require('mongoose');

var Area = mongoose.model('area', {
	name: Number
});

module.exports = Area;