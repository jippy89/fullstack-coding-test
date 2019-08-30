const state = {
  todoList: []
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

export default { state, mutations, actions }
