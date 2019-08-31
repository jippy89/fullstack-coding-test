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
        .isString().withMessage("Must be a 'string' type"),
      body('deadline')
        .not().isEmpty().withMessage("'deadline' is required")
        .isISO8601().withMessage("Must be in 'yyyy-mm-dd' format"),
      TodoController.postTodo)

// PUT /todos/:todoId
router.put('/:todoId', 
      body('title')
        .optional()
        .isString().withMessage("Must be a 'string' type"),      
      body('deadline')
        .optional()
        .isISO8601().withMessage("Must be in 'yyyy-mm-dd' format"),
      body('done_flag')
        .optional()
        .custom(value => {
          switch (value) {
            case 'true':
              return true
            case 'false':
              return true
          }
          return false
        }).withMessage("Must be a string containing 'true' or 'false'"),
      TodoController.putTodoById)

// DELETE /todo/:todoId
router.delete('/:todoId', TodoController.deleteTodoById)

module.exports = router