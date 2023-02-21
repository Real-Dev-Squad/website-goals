<template>
  <div class="container ">
    <form action="">
      <h2 class="text-center">
        Create a New Goal
      </h2>
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
      <div class="input-container">
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
      </div>
      <div class="input-container">
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
      </div>
      <div class="input-container">
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
      </div>
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
import InputField from '../reusable/InputField.vue'
import SelectOption from '../reusable/SelectOption.vue'
import SubmitButton from '../reusable/Buttons.vue'

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
  })
}
</script>
<style>
.container {
  padding: 2rem;
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
