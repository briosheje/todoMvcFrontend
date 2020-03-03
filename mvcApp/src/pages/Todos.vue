<template>
  <q-page padding>
    <q-toolbar class="bg-primary text-white">
      <q-toolbar-title>
        Todos
      </q-toolbar-title>
      <q-btn @click="add()" type="button" flat round dense icon="add" />
    </q-toolbar>
    <q-list padding>
      <q-item
        v-for="(todo, index) in todos"
        :key="index"
        @click="edit(todo)"
        clickable
        v-ripple
      >
        <q-item-section side top>
          <q-checkbox
            v-model="todo.completed"
            @input="onTodoCompletedToggle(todo)"
          />
        </q-item-section>
        <q-item-section>
          {{todo.description}}
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
export default {
  name: 'Todos',
  data () {
    return {
      todos: []
    }
  },
  methods: {
    add () {
      this.$router.push({
        path: 'todos/new/'
      })
    },
    edit ({ id }) {
      this.$router.push({
        path: `todos/${id}`
      })
    },
    async onTodoCompletedToggle (todo) {
      const { todos } = this.$services
      await todos.update(todo.id, todo)
    }
  },
  mounted: async function () {
    const { todos } = this.$services
    this.todos = await todos.list()
  }
}
</script>
