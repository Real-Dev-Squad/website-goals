<template>
  <v-card elevation="1">
    <v-form @submit.prevent="">
      <v-row>
        <v-col cols="12" md="8">
          <v-text-field hide-details v-model="goal.title" />
        </v-col>
      </v-row>
    </v-form>
  </v-card>
</template>

<script lang="ts" setup>
import { useGoalsStore } from '~/store/goals'

const props = defineProps(['goalId'])
const goalStore = useGoalsStore()

const goal = goalStore.getGoalDetailById(props.goalId)

</script>

<style scoped></style>
