module.exports = function() {

	let db = require('../libs/db-conecction')()
	let mongoose = require('mongoose')
	let Schema = mongoose.Schema

	let Task =  new Schema({		
		title: String,
		description: String,
		status: Boolean
	})
	return mongoose.model('tasks', Task)
}
