const express = require('express')
const router = express.Router()

const model = require('../model/task')()


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

router.get('/turn/:id', (req, res) => {
	console.log("params.id:"+req.params.id)
	let id = req.param.id
	model.findById(id, (err, task) => {
		console.log("task: "+task)
		console.log("error: --- "+ err)
		if (err) throw err
		task.status = !task.status
		task.save()
		.then(() => res.redirect('/'))
	})
})

module.exports = router