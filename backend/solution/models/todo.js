// Given a resource "todo" with fields defined as:
//   - title: string
//   - done_flag: string, "true" or "false"
//   - deadline: date, formatted as "yyyy-mm-dd"
const fs = require('fs')
const path = require('path')
const publicPath = require('../utils/path')
const dbPath = path.join(publicPath, 'db', 'db.json')


const Todo = new class TodoSchema {
  constructor(title, deadline) {
    this.title = title
    this.done_flag = "false" // must be a string
    this.deadline = deadline // must be in "yyyy-mm-dd" format
  }

  findAll (res) {
    return fs.readFile(dbPath, 'utf8', (err, todoListBuffer) => {
      if (err) throw err
      const parsedTodoList = JSON.parse(todoListBuffer)
      res.json(parsedTodoList)
    })
  }

  findById (res, todoId) {
    return fs.readFile(dbPath, 'utf8', (err, todoListBuffer) => {
      if (err) throw err
      const parsedTodoList = JSON.parse(todoListBuffer)
      const foundTodo = parsedTodoList.find(todo => todo.id == todoId)
      res.json(foundTodo)
    })
  }

  create (res, todo) {
    // Start with one or none
    todo = { id: 1, ...todo, done_flag: "false" }
    return fs.readFile(dbPath, 'utf8',(err, todoListBuffer) => {
      if(err) throw err
      // If todoList doesn't exit or length == 0, create id 1
      const parsedTodoList = JSON.parse(todoListBuffer)
      if(!parsedTodoList || parsedTodoList.length === 0) {
        return fs.writeFile(dbPath, JSON.stringify([todo]), (err) => {
          if(err) throw err
          return res.json(todo)
        })
      } else { // if data exist
        const { id } = parsedTodoList[parsedTodoList.length -1]
        todo = { ...todo, id: id + 1 }
        parsedTodoList.push(todo)
        return fs.writeFile(dbPath, JSON.stringify(parsedTodoList), (err) => {      
          if(err) throw err
          return res.json(todo)
        })
      }
    })
  }

  update (res, updatedTodo) {
    fs.readFile(dbPath, 'utf8', (err, todoListBuffer) => {
      if(err) throw err
      const parsedTodoList = JSON.parse(todoListBuffer)

      // Find TodoList
      const foundTodo = parsedTodoList.find(todo => todo.id == updatedTodo.id)
      if (foundTodo) {
        updatedTodo = {
          id: foundTodo.id,
          title: updatedTodo.title == null ? foundTodo.title : updatedTodo.title, 
          deadline: updatedTodo.deadline == null ? foundTodo.deadline : updatedTodo.deadline, 
          done_flag: updatedTodo.done_flag == null ? foundTodo.done_flag.toString() : updatedTodo.done_flag.toString() 
        }
        parsedTodoList[foundTodo.id - 1] = updatedTodo
        fs.writeFile(dbPath, JSON.stringify(parsedTodoList), (err) => {
          if(err) throw err
          return res.json(parsedTodoList[foundTodo.id - 1])
        })
      } else {
        res.json({
          msg: "Todo not found"
        })
      }
    })
  }

  delete (res, todoId) {
    fs.readFile(dbPath, 'utf8', (err, todoListBuffer) => {
      if(err) throw err
      const parsedTodoList = JSON.parse(todoListBuffer)

      // Filter the todolist
      const filteredTodoList = parsedTodoList.filter(todo => todo.id != todoId)
      fs.writeFile(dbPath, JSON.stringify(filteredTodoList), err => {
        if(err) throw err
        return res.json()
      })
    })
  }
}

module.exports = Todo