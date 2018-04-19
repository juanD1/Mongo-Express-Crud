const mongoose = require('mongoose')

let db

module.export = function Connection(){
	if (!db) {
		db = mongoose.connect('mongodb://localhost/crud-example'), {
			useMongoClient: true
		}
	}

	return db
}