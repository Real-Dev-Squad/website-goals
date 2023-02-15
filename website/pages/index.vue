<template>
  <div>
    <ul>
      <GoalTabAddVue :goal="DEFAULT_GOAL" @goal-added="addGoal" />
      <GoalFrom />
    </ul>
  </div>
</template>

<script>
import GoalTabAddVue from '../components/GoalTabAdd.vue'
import { DEFAULT_GOAL } from '../constant/goal'
import GoalFrom from '../components/goal-form/goal-form'

export default {
  name: 'HomePage',
  components: {
    GoalTabAddVue,
    GoalFrom
  },
  data () {
    return {
      DEFAULT_GOAL
    }
  },
  methods: {
    addGoal (goal) {
      this.$store.dispatch('goals/addGoal', goal)
    }
  }
}
</script>

<style scoped></style>
