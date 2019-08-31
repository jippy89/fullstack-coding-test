const express = require('express'),
      router  = express.Router()

const TodoController = require('../controllers/todo')

// GET /todos
router.get('/', TodoController.getTodo)

// GET /todos/:todoId
router.get('/:todoId', TodoController.getTodoById)

// POST /todos
router.post('/', TodoController.postTodo)

// PUT /todos/:todoId
router.put('/:todoId', TodoController.putTodoById)

module.exports = router