// External Dependancies
const boom = require('boom');

// Get Data Models
const Todo = require('../models/Todo');

// Get all todos
exports.getTodos = async (req, reply) => {
	try {
		return await Todo.find();
	} catch (err) {
		throw boom.boomify(err);
	}
};

// Get single item by ID
exports.getSingleTodo = async (req, reply) => {
	try {
		const id = req.params.id;
		return await Todo.findById(id);
	} catch (err) {
		throw boom.boomify(err);
	}
};

// Add a new item
exports.addTodo = async (req, reply) => {
	try {
		const todo = new Todo(req.body);
		return todo.save();
	} catch (err) {
		throw boom.boomify(err);
	}
};

// Update an existing item
exports.updateTodo = async (req, reply) => {
	try {
		const id = req.params.id;
		const todo = req.body;
		const {...updateData} = todo;
		return await Todo.findByIdAndUpdate(id, updateData, {new: true});
	} catch (err) {
		throw boom.boomify(err);
	}
};

// Delete a item
exports.deleteTodo = async (req, reply) => {
	try {
		const id = req.params.id;
		return await Todo.findByIdAndRemove(id);
	} catch (err) {
		throw boom.boomify(err);
	}
};