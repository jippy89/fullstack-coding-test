<template>
  <div id="app">
    <TodoInput />
    <TodoListContainer />
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
