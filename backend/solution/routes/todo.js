const express   = require('express'),
      router    = express.Router(),
      { body } = require('express-validator')

const TodoController = require('../controllers/todo')

// GET /todos
router.get('/', TodoController.getTodo)

// GET /todos/:todoId
router.get('/:todoId', TodoController.getTodoById)

// POST /todos
router.post('/', 
      body('title')
        .not().isEmpty().withMessage("'title' is required")
        .isAlphanumeric().withMessage("Must be a 'string' type"),
      body('deadline')
        .not().isEmpty().withMessage("'deadline' is required")
        .isISO8601().withMessage("Must be in 'yyyy-mm-dd' format"),
      TodoController.postTodo)

// PUT /todos/:todoId
router.put('/:todoId', TodoController.putTodoById)

// DELETE /todo/:todoId
router.delete('/:todoId', TodoController.deleteTodoById)

module.exports = router