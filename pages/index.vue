<template>
  <div>
    <ul>
      <GoalTabAddVue :goal="DEFAULT_GOAL" @goal-added="addGoal" />
      <GoalFormModal />
    </ul>
  </div>
</template>

<script>
import GoalTabAddVue from '../components/GoalTabAdd.vue'
import { DEFAULT_GOAL } from '../constants/goal'
import GoalFormModal from './../components/GoalFormModal/GoalFormModal.vue'

export default {
  name: 'HomePage',
  components: {
    GoalTabAddVue,
    GoalFormModal
  },
  data () {
    return {
      DEFAULT_GOAL
    }
  },
  methods: {
    addGoal (goal) {
    }
  }
}
</script>

<style scoped></style>
