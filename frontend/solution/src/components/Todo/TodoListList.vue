<template>
  <li>
    <form v-if="editMode" style="display:inline;">
      <input  type="text" :value="todo.text" @input="onInput">
      <button @click="saveTodo">Save</button>
    </form>
    <span v-else>{{ todo.text }}</span>
    <button v-if="editMode === false" @click="toggleEdit">Edit</button>
    <button @click="deleteTodo">Delete</button>
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
      'updateTodoById',
      'deleteTodoById'
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
      // Toggle 'editMode'
      this.updateTodoById(this.todoObj)
      this.toggleEdit()
    },
    deleteTodo () {
      this.deleteTodoById(this.todo.id)
    }
  }
}
</script>
