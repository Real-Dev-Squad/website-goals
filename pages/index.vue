<template>
  <div>
    <ul>
      <GoalTabAdd :goal="DEFAULT_GOAL" @goal-added="addGoal" />
      <GoalFormModal />
    </ul>
  </div>
</template>

<script>
import GoalFormModal from '~/components/GoalFormModal.vue'
import GoalTabAdd from '~/components/GoalTabAdd.vue'
import { DEFAULT_GOAL } from '~/constants/goal'

export default {
  name: 'HomePage',
  data () {
    return {
      DEFAULT_GOAL
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
