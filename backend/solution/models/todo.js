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

  static findAll () {
    // Read to db
    // return all!
  }

  static findById () {
    // Read to db
    // Receive id
    // return the foundTodo
  }
}

module.exports = Todo