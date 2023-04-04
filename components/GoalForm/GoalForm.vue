<template>
  <v-container class="container">
    <v-form>
      <h2 class="text-center">
        Create a New Goal
      </h2>
      <v-text-field
        id="task-name"
        label="Goal Title*"
        type="text"
        name="task-name"
        placeholder="eg: Testing setup for dashboard"
        autofocus
        :rules="[required]"
      />
      <v-text-field
        id="title"
        label="Task Name*"
        type="text"
        name="title"
        :rules="[required]"
        placeholder="eg: Testing setup for dashboard"
      />
      <v-textarea
        name="input-7-1"
        label="Description"
        placeholder="Description of the goal..."
        value=""
      />
      <v-row>
        <v-col cols="12" sm="6">
          <v-text-field
            id="due-date"
            label="Due Date*"
            type="date"
            name="due-date"
            :rules="[required]"
          />
        </v-col>
        <v-col cols="12" sm="6">
          <PopupAssigneeVue />
        </v-col>
      </v-row>
      <v-btn
        id="submit"
        block
        type="submit"
        color="primary"
      >
        Submit
      </v-btn>
    </v-form>
  </v-container>
</template>

<script>
import PopupAssigneeVue from '../PopupAssignee.vue'

export default {
  name: 'GoalForm',
  components: {
    PopupAssigneeVue
  },
  methods: {
    required (value) {
      return !!value || 'Required.'
    }
  }
}
</script>
<style scoped>
.container {
  padding: 0 2rem 2rem;
}

</style>
