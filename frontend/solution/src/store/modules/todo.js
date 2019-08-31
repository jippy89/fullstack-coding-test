const state = {
  todoList: []
}

const getters = {
  todoList: state => state.todoList
}

const mutations = {
  'ADD_TODO' (state, todo) {
    state.todoList.push(todo)
  },
  'SET_TODO_BY_ID' (state, updatedTodo) {
    // Find the id,
    // replace with new one
    const foundTodo = state.todoList.find(todo => todo.id === updatedTodo.id)
    foundTodo.text = updatedTodo.text
  },
  'DELETE_TODO_BY_ID' (state, todoId) {
    state.todoList = state.todoList.filter(todo => todo.id !== todoId)
  }
}

const actions = {
  addTodo ({ commit }, todo) {
    commit('ADD_TODO', todo)
  },
  updateTodoById ({ commit }, todo) {
    commit('SET_TODO_BY_ID', todo)
  },
  deleteTodoById ({ commit }, todoId) {
    commit('DELETE_TODO_BY_ID', todoId)
  }
}

export default { state, getters, mutations, actions }
