<template>
  <v-container>
    <GoalFilters />
    <span v-if="recentlyCreated.isLoading">Loading...</span>
    <v-table v-else>
      <thead>
        <tr>
          <th></th>
          <th>Title</th>
          <th>Assignee</th>
          <th>Progress</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <GoalListTabEdit
          v-for="goalId in recentlyCreated.data"
          :key="goalId"
          :goal-id="goalId"
        />
      </tbody>
    </v-table>
  </v-container>
</template>

<script lang="ts" setup>
import { useGoalsStore } from "~/store/goals";
import { storeToRefs } from "pinia";

const goalStore = useGoalsStore();
const { recentlyCreated } = storeToRefs(goalStore);
</script>

<style scoped></style>
