<template>
  <div class="container ">
    <v-form>
      <h2 class="text-center">
        Create a New Goal
      </h2>
      <v-text-field
        id="task-name"
        label="Goal Title"
        type="text"
        name="task-name"
        placeholder="eg: Testing setup for dashboard"
        autofocus
        required
      />
      <v-text-field
        id="title"
        label="Task Name"
        type="text"
        name="title"
        required
        placeholder="eg: Testing setup for dashboard"
      />
      <v-textarea
        name="input-7-1"
        label="Description"
        placeholder="Description of the task"
        value=""
      />
      <div class="input-container">
        <v-text-field
          id="due-date"
          label="Due Date"
          type="date"
          name="due-date"
          required
          placeholder="eg: 2020-01-01"
        />
        <PopupAssigneeVue />
      </div>
      <v-btn
        id="submit"
        block
        type="submit"
        color="primary"
      >
        Submit
      </v-btn>
    </v-form>
  </div>
</template>

<script>
import PopupAssigneeVue from '../PopupAssignee.vue'

export default {
  name: 'GoalForm',
  components: {
    PopupAssigneeVue
  }
}
</script>
<style scoped>
.container {
  padding: 0 2rem 2rem;
}
.input-container {
  display: flex;
}
.input-container > *:first-child {
  margin-right: 2rem;
  width: 100%;
}
.input-container > *:last-child {
  width: 100%;
}

label {
  font-size: 1.2rem;
  font-weight: 600;
}
</style>
