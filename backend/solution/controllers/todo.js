const todoModel = require('../models/todo')

const todoController = new class ToDoController {
  
  // GET /todos
  getTodo (req, res) {
    res.send("Hola soy 'getTodos'!")
  }

  // POST /todos
  postTodo (req, res) {
    res.send("POST /todos")
  }
}

module.exports = todoController