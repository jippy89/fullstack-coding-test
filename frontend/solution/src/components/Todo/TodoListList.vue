<template>
  <li class="card">
    <input v-if="editMode" type="text" :value="todo.text">
    <span v-else>{{ todo.text }}</span>
    <button v-if="editMode === false" @click="toggleEdit">Edit</button>
    <button v-else @click="saveTodo">Save</button>
    <button>Delete</button>
  </li>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      editMode: false
    }
  },
  methods: {
    toggleEdit () {
      this.editMode = !this.editMode
    },
    saveTodo () {
      // Save todo via Vuex
      console.log('save..')
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
