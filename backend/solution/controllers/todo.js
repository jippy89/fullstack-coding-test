const { validationResult } = require('express-validator')
const todoModel = require('../models/todo')

const todoController = new class ToDoController {
  
  // GET /todo
  getTodo (req, res) {
    todoModel.findAll(res)
  }

  // GET /todo/:todoId
  getTodoById (req, res) {
    const todoId = req.params.todoId
    todoModel.findById(res, todoId)
  }

  // POST /todo
  postTodo (req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    const { title, deadline } = req.body
    return todoModel.create(res, { title, deadline })
  }

  // PUT /todo/:todoId
  putTodoById (req, res) {
    const todoId = req.params.todoId
    const { title, deadline, done_flag } = req.body
    return todoModel.update(res, { id: todoId, title, deadline, done_flag })
  }

  // DELETE /todo/:todoId
  deleteTodoById (req, res) {
    const todoId = req.params.todoId
    return todoModel.delete(res, todoId)
  }
}

module.exports = todoController