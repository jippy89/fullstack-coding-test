<template>
  <li class="card">
    <input v-if="editMode" type="text" :value="todo.text" @input="onInput">
    <span v-else>{{ todo.text }}</span>
    <button v-if="editMode === false" @click="toggleEdit">Edit</button>
    <button v-else @click="saveTodo">Save</button>
    <button>Delete</button>
  </li>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      editMode: false,
      todoObj: {}
    }
  },
  methods: {
    ...mapActions([
      'updateTodo'
    ]),
    toggleEdit () {
      this.editMode = !this.editMode
    },
    onInput (evt) {
      const todoText = evt.target.value
      this.todoObj = { ...this.todo, text: todoText }
    },
    saveTodo () {
      // Save todo via Vuex
      this.updateTodo(this.todoObj)
      // Toggle 'editMode'
      this.toggleEdit()
    }
  }
}
</script>

<style scoped>
.card {
  border: 1px solid black;
}
</style>
