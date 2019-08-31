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
    const { title, deadline } = req.body
    return todoModel.create(res, { title, deadline })
  }
}

module.exports = todoController