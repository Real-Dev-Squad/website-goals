<template>
  <v-container>
    <GoalTabAdd :goal="DEFAULT_GOAL" @goal-added="addGoal" />
    <v-btn @click="showGoalForm = true" color="primary">Show Goal Modal</v-btn>
    <GoalFormModal :visible="showGoalForm" @close="showGoalForm = false" />
  </v-container>
</template>

<script>
import GoalFormModal from '~/components/GoalFormModal.vue'
import GoalTabAdd from '~/components/GoalTabAdd.vue'
import { DEFAULT_GOAL } from '~/constants/goal'

export default {
  name: 'HomePage',
  data () {
    return {
      DEFAULT_GOAL,
      showGoalForm: false
    }
  },
  methods: {
    addGoal (goal) {
    }
  },
  components: { GoalTabAdd, GoalFormModal }
}
</script>

<style scoped></style>
