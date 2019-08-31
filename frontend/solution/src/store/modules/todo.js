const state = {
  todoList: []
}

const getters = {
  todoList: state => state.todoList
}

const mutations = {
  'ADD_TODO' (state, todo) {
    state.todoList.push(todo)
  }
}

const actions = {
  addTodo ({ commit }, todo) {
    commit('ADD_TODO', todo)
  }
}

export default { state, getters, mutations, actions }
