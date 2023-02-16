<template>
  <div class="container loaderContainer">
    <form action="" class="goal-form">
      <InputField
        label="Goal Title."
        for-input="title"
        is-required="true"
        input-class="input"
        type="text"
        name="task-name"
        placeholder="eg: Testing setup for dashboard"
        is-autofocus="true"
      />
      <InputField
        label="Task Name:"
        for-input="task-name"
        label-class="editable"
        is-required="true"
        input-class="input notEditing"
        type="text"
        name="title"
        placeholder="eg: Testing setup for dashboard"
        is-autofocus="true"
      />
      <InputField
        label="Links:"
        for-input="links"
        label-class="editable"
        is-required="true"
        input-class="input notEditing"
        type="text"
        name="links"
        placeholder="Comma separated links"
        is-autofocus="true"
      />
      <SelectOption
        v-model="selectedOption"
        label="User Role."
        label-class="editable"
        :is-required="true"
        name="user-role"
        input-class="input notEditing user-role"
        :options="usernameCategoryOptions"
      />
      <InputField
        id="username"
        label="Username:"
        for-input="username"
        label-class="editable"
        input-class="input notEditing"
        :is-required="true"
        type="text"
        name="username"
        placeholder="eg: sahsisunny"
        :is-autofocus="true"
      />
      <SelectOption
        v-model="selectedOption"
        label="Priority:"
        label-class="editable"
        :is-required="true"
        name="priority"
        input-class="input notEditing priority"
        :options="goalPriorityOptions"
      />
      <SelectOption
        v-model="selectedOption"
        label="Type"
        label-class="editable"
        :is-required="true"
        name="type"
        input-class="input notEditing type"
        :options="goalTypeOptions"
      />
      <InputField
        id="due-date"
        label="Due Date:"
        for-input="due-date"
        label-class="editable"
        input-class="input notEditing"
        :is-required="true"
        type="date"
        name="due-date"
        :is-autofocus="true"
      />
      <InputField
        id="assignee"
        label="Assignee:"
        for-input="assignee"
        label-class="editable"
        input-class="input notEditing"
        :is-required="true"
        type="text"
        name="assignee"
        placeholder="eg: ankush"
        :is-autofocus="true"
      />
      <SubmitButton
        id="submit"
        input-class="submitBtn"
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
  data () {
    return {
      usernameCategoryOptions: [
        { label: 'Select a category', value: 'select' },
        { label: 'MEMBER', value: 'member' },
        { label: 'ADMIN', value: 'admin' },
        { label: 'DEVELOPER', value: 'developer' },
        { label: 'TESTER', value: 'tester' },
        { label: 'NEWCOMER', value: 'newcomer' },
        { label: 'DESIGNER', value: 'designer' }
      ],
      goalPriorityOptions: [
        { label: 'Select the priority', value: 'select' },
        { label: 'HIGH', value: 'high' },
        { label: 'MEDIUM', value: 'medium' },
        { label: 'LOW', value: 'low' }
      ],
      goalTypeOptions: [
        { label: 'Select the type', value: 'select' },
        { label: 'BUG', value: 'bug' },
        { label: 'FEATURE', value: 'feature' },
        { label: 'DOCUMENTATION', value: 'documentation' },
        { label: 'TESTING', value: 'testing' }
      ]
    }
  },
  methods: {}
}
</script>
<style>
:root {
  --color-white: #fff;
  --color-gray: #666;
  --color-gray-light: #f4f4f4;
  --color-rgba-black-065: rgba(0, 0, 0, 0.65);
  --color-blue: #7171fd;
  --color-blue-hover: #3535ba;
  --color-red: red;
}

.goal-form {
  width: 60vw;
  max-width: 40rem;
  min-width: 18.75rem;
  margin: 0 auto;
  padding: 1em 1.5em;
  border: 1px solid var(--color-gray-light);
  border-radius: 20px;
  box-shadow: 0 0 15px -7px var(--color-rgba-black-065);
}

.inputBox {
  width: 100%;
  margin-bottom: 1em;
  display: flex;
  flex-direction: column;
}

label {
  font-size: 1rem;
  font-weight: 700;
  text-align: left;
}

.input {
  padding: 1em;
  border: 1px solid var(--color-gray);
  border-radius: 5px;
  width: 100%;
}

::placeholder {
  font-family: 'Roboto', sans-serif;
}

.submitBtn {
  font-size: 1rem;
  padding: 1em 0.5em;
  width: 100%;
  background-color: var(--color-blue);
  color: var(--color-white);
  cursor: pointer;
  border-radius: 5px;
}

.submitBtn:hover {
  opacity: 0.8;
  background-color: var(--color-blue-hover);
}

.required {
  color: var(--color-red);
  font-size: medium;
}

.type,
.user-role,
.priority {
  width: 100%;
  padding: 1em;
  border-radius: 5px;
}

.notEditing {
  display: none;
}
.edit-button {
  font-size: 0.9rem;
  opacity: 60%;
  right: 5px;
  cursor: pointer;
  transition: opacity ease 0.25s;
  padding: 0.3125rem 0.625rem 0.3125rem 0rem;
}

.edit-button:hover,
.edit-button.edit-button__active {
  opacity: 100%;
}
</style>
