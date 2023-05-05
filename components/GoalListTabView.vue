<template>
  <li>
    {{ JSON.stringify(goal) }}
  </li>
</template>

<script lang="ts" setup>
import { useGoalsStore } from '~/store/goals'

const props = defineProps(['goalId'])
const goalStore = useGoalsStore()

const goal = goalStore.getGoalDetailById(props.goalId)

</script>

<style scoped></style>
