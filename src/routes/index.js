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

router.get('/turn/:id', (req, res) => {
	console.log("params.id:"+req.params.id)
	// let id = new ObjectId(req.param.id)
	// model.findById({"_id": id}, (err, task) =>
	let id = ObjectId(req.param.id)
	console.log(typeof(id))
	// model.findOne({_id: id}, (err, task) => {
	// 	console.log("task: "+task)
	// 	console.log("error: --- "+ err)
	// 	if (err) throw err
	// 	task.status = !task.status
	// 	task.save()
	// 	.then(() => res.redirect('/'))
	// })
	model.findById(id, (err, task) => {
		console.log(task)
		if (err) throw err
		res.json(task)
	})
})

module.exports = router