<template>
  <v-container>
    <GoalTabPost v-if="state.showGoalTabPost" @on-goal-tab-post-blur="state.showGoalTabPost = false"/>
    <GoalTabPostToggleButton v-else @on-add-goal-button-click="state.showGoalTabPost = true"/>
    <GoalList />
  </v-container>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

const state = reactive({
  showGoalTabPost: false
})
</script>

<script lang="ts">
export default {
  name: 'HomePage'
}
</script>

<style scoped></style>
