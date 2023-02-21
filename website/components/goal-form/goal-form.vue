<template>
  <div class="container loaderContainer">
    <form action="" class="goal-form">
      <InputField
        id="task-name"
        label="Goal Title"
        type="text"
        name="task-name"
        required
        placeholder="eg: Testing setup for dashboard"
        autofocus
      />
      <InputField
        id="title"
        label="Task Name"
        type="text"
        name="title"
        required
        placeholder="eg: Testing setup for dashboard"
      />
      <InputField
        id="links"
        label="Links"
        type="text"
        name="links"
        required
        placeholder="Comma separated links"
      />
      <SelectOption
        label="User Role"
        name="user-role"
        required
        :options="usernameCategoryOptions"
      />
      <InputField
        id="username"
        label="Username"
        type="text"
        name="username"
        required
        placeholder="eg: sahsisunny"
      />
      <SelectOption
        label="Priority"
        name="priority"
        required
        :options="goalPriorityOptions"
      />
      <SelectOption
        label="Type"
        name="type"
        required
        :options="goalTypeOptions"
      />
      <InputField
        id="due-date"
        label="Due Date"
        type="date"
        name="due-date"
        required
        placeholder="eg: 2020-01-01"
      />
      <InputField
        id="assignee"
        label="Assignee"
        type="text"
        name="assignee"
        required
        placeholder="eg: ankush"
      />
      <SubmitButton
        id="submit"
        type="submit"
        name="submit"
        label="Submit"
      />
    </form>
  </div>
</template>

<script>
import InputField from './../reusable/input-field.vue'
import SelectOption from './../reusable/select-option.vue'
import SubmitButton from './../reusable/submit-button.vue'

export default {
  name: 'GoalForm',
  components: {
    InputField,
    SelectOption,
    SubmitButton
  },
  data: () => ({
    usernameCategoryOptions: ['Select a user role', 'MEMBER', 'ADMIN', 'DEVELOPER', 'TESTER', 'NEWCOMER', 'DESIGNER'],
    goalPriorityOptions: ['Select the priority', 'HIGH', 'MEDIUM', 'LOW'],
    goalTypeOptions: ['Select the type', 'BUG', 'FEATURE', 'DOCUMENTATION', 'TESTING']
  }),
  methods: {}
}
</script>
<style>
:root {
  --color-gray: #666;
  --color-rgba-black-065: rgba(0, 0, 0, 0.65);
}

.goal-form {
  width: 60vw;
  max-width: 40rem;
  min-width: 18.75rem;
  margin: 0 auto;
  padding: 1em 1.5em;
  border: 1px solid var(--color-gray-light);
  border-radius: 10px;
  box-shadow: 0 0 15px -7px var(--color-rgba-black-065);
}
label {
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--color-rgba-black-065);
}
</style>
