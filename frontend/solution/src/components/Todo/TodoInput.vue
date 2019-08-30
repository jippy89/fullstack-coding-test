<template>
  <form @submit.prevent="onSubmit">
    <input type="text" v-model="todo">
    <button type="submit">Add</button>
  </form>
</template>

<script>
export default {
  data () {
    return {
      counter: 0,
      todo: ''
    }
  },
  methods: {
    onSubmit (evt) {
      const todoObject = {
        id: ++this.counter,
        text: this.todo,
        status: false
      }
      this.$emit('addTodo', todoObject)
    }
  }
}
</script>
