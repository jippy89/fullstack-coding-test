<template>
  <div id="app">
    <TodoInput @addTodo="addTodo" />
  </div>
</template>

<script>
import TodoInput from './components/Todo/TodoInput'

export default {
  name: 'app',
  components: {
    TodoInput
  },
  data () {
    return {
      todoList: []
    }
  },
  methods: {
    addTodo (todo) {
      console.log(todo)
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
