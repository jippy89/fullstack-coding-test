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
      todo: ''
    }
  },
  methods: {
    onSubmit (evt) {
      this.$emit('addTodo', this.todo)
    }
  }
}
</script>
