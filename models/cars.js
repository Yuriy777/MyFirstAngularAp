var mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
	car: String, 
	imageUrl: String, 
	model: String, 
	snippet: String,
	price: Number,
	mileage: Number,
	fuel: String,
	transmission: String,
	engine: Number,
	phone: Number,
	year: Number 
});

mongoose.model('Car', userSchema, '');