// Given a resource "todo" with fields defined as:
//   - title: string
//   - done_flag: string, "true" or "false"
//   - deadline: date, formatted as "yyyy-mm-dd"


class Todo {
  constructor(title, deadline) {
    this.title = title
    this.done_flag = "false" // must be a string
    this.deadline = deadline // must be in "yyyy-mm-dd" format
  }

  create (todo) {
    // Start with one
    // 
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