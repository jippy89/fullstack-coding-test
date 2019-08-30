<template>
  <div id="app">
    <TodoInput @addTodo="addTodo" />
    <TodoListContainer :todoList="todoList" />
  </div>
</template>

<script>
import TodoInput from './components/Todo/TodoInput'
import TodoListContainer from './components/Todo/TodoListContainer'

export default {
  name: 'app',
  components: {
    TodoInput,
    TodoListContainer
  },
  data () {
    return {
      todoList: []
    }
  },
  methods: {
    addTodo (todo) {
      this.todoList.push(todo)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
