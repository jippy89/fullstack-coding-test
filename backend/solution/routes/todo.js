const express = require('express'),
      router  = express.Router()

const TodoController = require('../controllers/todo')

// GET /todos
router.get('/', TodoController.getTodo)

// POST /todos
router.post('/', TodoController.postTodo)

module.exports = router