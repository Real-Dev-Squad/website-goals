<template>
  <v-container>
    <GoalTabPost v-if="showGoalTabPost" @on-goal-tab-post-blur="showGoalTabPost = false"/>
    <GoalTabPostToggleButton v-else @on-add-goal-button-click="showGoalTabPost = true"/>
  </v-container>
</template>

<script>
export default {
  name: 'HomePage',
  data () {
    return {
      showGoalForm: false,
      showGoalTabPost: false
    }
  }
}
</script>

<style scoped></style>
