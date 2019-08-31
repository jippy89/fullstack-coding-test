<template>
  <form @submit.prevent="onSubmit">
    <input type="text" v-model="todo">
    <button type="submit">Add</button>
  </form>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      counter: 0,
      todo: ''
    }
  },
  methods: {
    ...mapActions([
      'addTodo'
    ]),
    onSubmit (evt) {
      const todoObject = {
        id: ++this.counter,
        text: this.todo,
        status: false
      }
      this.addTodo(todoObject)
    }
  }
}
</script>
