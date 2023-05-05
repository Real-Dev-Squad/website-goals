<template>
  <div v-if="recentlyCreated.isLoading">
    Loading...
  </div>
  <div v-else>
    <GoalListTabView v-for="goalId in recentlyCreated.data" :key="goalId" :goal-id="goalId"/>
  </div>
</template>

<script lang="ts" setup>
import { useGoalsStore } from '~/store/goals'
import { storeToRefs } from 'pinia'

const goalStore = useGoalsStore()
const { recentlyCreated } = storeToRefs(goalStore)

</script>

<style scoped></style>
