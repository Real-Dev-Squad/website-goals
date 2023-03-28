<template>
  <v-form @keyup.native.enter="handleSubmit">
    <v-container>
      <v-row>
        <v-col cols="12" md="9">
          <v-text-field v-model="form.title" label="Title" required />
        </v-col>
        <v-col cols="6" md="1">
          <PopupAssigneeVue v-model="form.assignees" />
        </v-col>
        <v-col cols="6" md="2">
          <v-select v-model="form.type" :items="options.type" label="Type" required />
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import { GOAL_TYPE, GOAL_STATUS, DEFAULT_GOAL } from '../constant/goal'
import PopupAssigneeVue from './PopupAssignee.vue'

export default {
  name: 'GoalTabAdd',
  components: {
    PopupAssigneeVue
  },
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
        status: this.goal.status,
        assignees: this.goal.assignees
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
  methods: {
    handleSubmit () {
      if (!this.form.title) { return }

      const goal = {
        title: this.form.title,
        type: this.form.type,
        status: this.form.status
      }

      this.$emit('goal-added', goal)
      this.form.title = DEFAULT_GOAL.title
      this.form.type = DEFAULT_GOAL.type
      this.form.status = DEFAULT_GOAL.status
      this.form.assignees = DEFAULT_GOAL.assignees
    }
  }
}
</script>

<style scoped>
</style>
