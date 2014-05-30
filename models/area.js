var mongoose =  require('mongoose');

var Area = mongoose.model('area', {
	name: String,
});

module.exports = Area;