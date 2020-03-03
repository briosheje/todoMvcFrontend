<template>
  <q-page padding>
    <form
      @submit.prevent.stop="saveOrUpdateRecord"
      @reset.prevent.stop="resetRecord"
      class="q-gutter-md"
    >
      <q-toolbar class="bg-primary text-white">
        <q-btn @click="back()" flat round dense icon="close" />
        <q-toolbar-title>
          Add / Edit a todo
        </q-toolbar-title>
        <q-btn type="reset" flat round dense icon="refresh" />
        <q-btn @click="deleteRecord()" type="button" v-if="!isNewRecord" flat round dense icon="delete" />
        <q-btn type="submit" flat round dense icon="save" />
      </q-toolbar>
      <q-input
        ref="recordDescription"
        clearable
        clear-icon="close"
        outlined
        v-model="record.description"
        label="Description *"
        lazy-rules
        :rules="[
          val => val !== null && val !== undefined && val !== '' || 'Please type a description.'
        ]"
      />
      <q-toggle
        ref="recordCompleted"
        v-model="record.completed"
        label="Completed?"
      />
    </form>
  </q-page>
</template>

<script>
export default {
  name: 'TodoEdit',
  data () {
    return {
      id: this.$route.params.id,
      record: null
    }
  },
  methods: {
    async saveOrUpdateRecord () {
      this.$refs.recordDescription.validate()
      if (this.$refs.recordDescription.hasError) {
        // silence is golden.
      } else {
        const { todos } = this.$services
        if (this.isNewRecord) {
          const newRecord = await todos.save(this.record)
          if (newRecord) this.back()
        } else {
          const updatedRecord = await todos.update(this.record.id, this.record)
          if (updatedRecord) this.back()
        }
      }
    },
    async deleteRecord () {
      const { todos } = this.$services
      const ok = await todos.delete(this.record.id)
      if (ok) this.back()
    },
    resetRecord () {
      this.record.description = null
      this.record.completed = null

      this.$refs.recordDescription.resetValidation()
    },
    back () {
      this.$router.back()
    }
  },
  async mounted () {
    const { todos } = this.$services
    console.log('todos is', todos)
    console.log('this.id is', this.id)
    if (this.id) this.record = await todos.get(+this.id)
    else this.record = await todos.new()
    console.log('record is', this.record)
  },
  computed: {
    isNewRecord () {
      return this.record && !this.record.id
    }
  }
}
</script>
