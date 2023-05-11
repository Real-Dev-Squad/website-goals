<template>
    <v-col cols="12" md="8" class="pa-0">
      <v-text-field hide-details v-model="goal.title" />
    </v-col>
    <v-col cols="6" md="4" class="pa-0">
      <popup-assignee :assignee-ids="assigneeIds" />
    </v-col>
</template>

<script lang="ts" setup>
import { useGoalsStore } from '~/store/goals'

const props = defineProps(['goalId'])
const goalStore = useGoalsStore()

const goal = goalStore.getGoalDetailById(props.goalId)
const assigneeIds: string[] = goal.assignedTo ? [goal.assignedTo] : []
</script>
