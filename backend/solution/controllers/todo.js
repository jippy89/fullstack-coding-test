const todoModel = require('../models/todo')

const todoController = new class ToDoController {
  
  // GET /todos
  getTodo (req, res) {
    res.send("Hola soy 'getTodos'!")
  }

  // POST /todos
  postTodo (req, res) {
    const { title, deadline } = req.body
    return todoModel.create(res, { title, deadline })
  }
}

module.exports = todoController