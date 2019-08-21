// Import our Controllers
const todoController = require('../controllers/todoController');

// Import Swagger documentation
// const documentation = require('./documentation/todoApi')

const routes = [
  {
    method: 'GET',
    url: '/api/todos',
    handler: todoController.getTodos
  },
  {
    method: 'GET',
    url: '/api/todos/:id',
    handler: todoController.getSingleTodo
  },
  {
    method: 'POST',
    url: '/api/todos',
    handler: todoController.addTodo,
    // schema: documentation.addTodoSchema
  },
  {
    method: 'PUT',
    url: '/api/todos/:id',
    handler: todoController.updateTodo
  },
  {
    method: 'DELETE',
    url: '/api/todos/:id',
    handler: todoController.deleteTodo
  }
];

module.exports = routes;
