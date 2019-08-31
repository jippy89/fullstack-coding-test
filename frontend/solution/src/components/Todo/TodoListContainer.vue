<template>
  <ul>
    <li v-for="todo in todoList" :key="todo.id">
      {{ todo.text }}
    </li>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'todoList'
    ])
  }
}
</script>
