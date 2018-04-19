const express = require('express')
const router = express.Router()

const model = require('../model/task')()

router.get('/', (req, res) => {
	model.find({}, (err, data) => {
		if (err) throw err
		res.render('index', {
			title: 'CRUD',
			task: data
		})
	})	
})

module.exports = router