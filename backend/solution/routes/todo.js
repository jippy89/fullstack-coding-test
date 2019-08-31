const express = require('express'),
      router  = express.Router()

const TodoController = require('../controllers/todo')

// GET /todos
router.get('/', TodoController.getTodo)

// GET /todos/:todoId
router.get('/:todoId', TodoController.getTodoById)

// POST /todos
router.post('/', TodoController.postTodo)

module.exports = router