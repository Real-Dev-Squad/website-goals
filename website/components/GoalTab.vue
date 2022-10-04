<template>
  <form class="goal-form" @submit.prevent="handleSubmit">
    <select id="goal-status" v-model="form.status" class="status">
      <option
        selected
        disabled
        hidden
        default
        value=""
        class="status__default"
      >
        Status
      </option>
      <option v-for="option in options.status" :key="option.type" :value="option.type" class="status__option">
        {{ option.text }}
      </option>
    </select>
    <div class="title">
      <input v-model="form.title" name="title" placeholder="Add task" class="title__field">
    </div>
    <select id="goal-type" v-model="form.type" class="type">
      <option
        selected
        disabled
        hidden
        default
        value=""
        class="type__default"
      >
        Goal Type
      </option>
      <option v-for="option in options.type" :key="option.type" :value="option.type" class="type__option">
        {{ option.text }}
      </option>
    </select>
  </form>
</template>

<script>
import { GOAL_TYPE, GOAL_STATUS, DEFAULT_GOAL } from '../constant/goal'

export default {
  name: 'GoalTab',
  props: {
    goal: {
      type: Object,
      required: true
    },
    isEditable: Boolean
  },
  data () {
    return {
      form: {
        title: this.goal.title,
        type: this.goal.type,
        status: this.goal.status
      },
      options: {
        type: [
          GOAL_TYPE.STANDUP,
          GOAL_TYPE.LONG_TERM,
          GOAL_TYPE.SHORT_TERM
        ],
        status: [
          GOAL_STATUS.COMPLETED,
          GOAL_STATUS.ONGOING,
          GOAL_STATUS.PAUSED
        ]
      }
    }
  },
  computed: {
    users () {
      return this.$store.state.users.list
    }
  },
  mounted () {
    this.$store.dispatch('users/fetchUsers')
  },
  methods: {
    handleSubmit () {
      const goal = {
        title: this.form.title,
        type: this.form.type,
        status: this.form.status
      }

      this.$emit('goal-added', goal)
      this.form.title = DEFAULT_GOAL.title
      this.form.type = DEFAULT_GOAL.type
      this.form.status = DEFAULT_GOAL.status
    }
  }
}
</script>

<style>
.goal-form {
  display: flex;
  align-items: center;
  border-radius: 2px;
  overflow: hidden;
  margin: 1px;
  box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(255, 255, 255), 0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
}

.title {
  flex-grow: 1;
}

.title__field {
  padding: 10px;
  width: 100%;
  border: 0;
}

.title__field:focus {
  outline: none;
}

select {
  padding: 10px;
  appearance: none;
  background-color: var(--base--dark);
  border: 0;
}

select:hover {
  color: var(--secondary-color);
}
</style>
