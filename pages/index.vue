<template>
  <div>
    <ul>
      <GoalTabAddVue :goal="DEFAULT_GOAL" @goal-added="addGoal" />
    </ul>
  </div>
</template>

<script>
import GoalTabAddVue from '../components/GoalTabAdd.vue'
import { DEFAULT_GOAL } from '../constant/goal'

export default {
  name: 'HomePage',
  components: {
    GoalTabAddVue
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
  },
}
</script>

<style scoped>
</style>
