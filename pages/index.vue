<template>
  <v-container>
    <GoalTabPost v-if="state.showGoalTabPost" @on-goal-tab-post-blur="state.showGoalTabPost = false"/>
    <GoalTabPostToggleButton v-else @on-add-goal-button-click="state.showGoalTabPost = true"/>
    <GoalList />
  </v-container>
</template>

<script lang="ts" setup>
import { reactive, onMounted } from 'vue'
import { useUsersStore } from '~/store/users'
import { useGoalsStore } from '~/store/goals'

const goalStore = useGoalsStore()
const userStore = useUsersStore()

const state = reactive({
  showGoalTabPost: false
})

onMounted(() => {
  goalStore.fetchGoals()
  userStore.fetchUsers()
})
</script>

<script lang="ts">
export default {
  name: 'HomePage'
}
</script>

<style scoped></style>
