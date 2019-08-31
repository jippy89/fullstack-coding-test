<template>
  <ol style="list-style-position: none;">
    <TodoListList v-for="todo in todoList" :key="todo.id"
      :todo="todo" />
  </ol>
</template>

<script>
import TodoListList from './TodoListList'
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'todoList'
    ])
  },
  components: {
    TodoListList
  }
}
</script>
