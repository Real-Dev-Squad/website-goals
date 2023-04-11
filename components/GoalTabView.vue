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
      <input v-model="form.title" name="title" placeholder="Add task" class="title__field" readonly>
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
import { GOAL_TYPE, GOAL_STATUS } from '~/constants/goal'

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
      // return this.$store.state.users.list
    }
  },
  mounted () {
    // this.$store.dispatch('users/fetchUsers')
  }
}
</script>

<style scoped>
.goal-form {
  display: flex;
  align-items: center;
  border-radius: 2px;
  overflow: hidden;
  cursor: pointer;
}

.goal-form:hover {
  background-color: var(--base--dark);
}

.title {
  flex-grow: 1;
}

.title__field {
  padding: 10px;
  width: 100%;
  border: 0;
  cursor: inherit;
}

.title__field:hover {
  color: var(--primary-color--light);
}

select:hover {
  color: var(--secondary-color);
}

.type {
  padding: 10px;
  cursor: inherit;
}

.status {
  padding: 10px;
  cursor: inherit;
}
</style>
