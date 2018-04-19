module.export = function() {

	let db = require('./../libs/db-conecction')()
	let Schema = require('mongoose').Schema

	let Task = Schema({
		title: String,
		description: String,
		status: Boolean
	})
	return db.model('tasks', Task)
}
