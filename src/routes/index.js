const express = require('express')
const router = express.Router()

const model = require('../model/task')()
const ObjectId = (require('mongoose').Types.ObjectId);


router.get('/', (req, res) => {
	model.find({}, (err, tasks) => {		
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

router.get('/task/:id', (req, res) => {
	let id = req.params.id
	model.findById(id)
		.then((task) => {
			// res.json(task)
			task.status = !task.status
			task.save()
			res.redirect('/')
		})
		.catch((err) => {
			console.log(err)
		})		
})

module.exports = router