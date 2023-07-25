<template>
  <v-container>
    <span v-if="recentlyCreated.isLoading">Loading...</span>
    <GoalListTabEdit v-else v-for="goalId in recentlyCreated.data" :key="goalId" :goal-id="goalId" />
  </v-container>
</template>

<script lang="ts" setup>
import { useGoalsStore } from '~/store/goals'
import { storeToRefs } from 'pinia'
const goalStore = useGoalsStore()
const { recentlyCreated } = storeToRefs(goalStore)
</script>

<style scoped></style>
