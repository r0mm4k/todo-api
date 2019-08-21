// External Dependancies
const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
	title: String,
	important: Boolean,
	done: Boolean
});

module.exports = mongoose.model('Todo', carSchema);
