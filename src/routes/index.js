const express = require('express')
const router = express.Router()

const model = require('../model/task')()

router.get('/', (req, res) => {
	model.find({}, (err, tasks) => {
		console.log(tasks)
		if (err) throw err
		res.render('index', {
			title: 'CRUD',
			tasks: tasks
		})
	})
})

router.post('/add', (req, res) => {
	let body = req.body
	body.status = false

	model.create(body, (err, tasks) => {
		if(err) throw err
		res.redirect('/')
	})
})

module.exports = router