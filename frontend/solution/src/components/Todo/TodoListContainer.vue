<template>
  <ul>
    <li v-for="todo in todoList" :key="todo.id">
      {{ todo.text }}
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    todoList: {
      type: Array,
      required: true
    }
  }
}
</script>
