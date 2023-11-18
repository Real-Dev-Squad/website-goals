<template>
  <v-container>
    <GoalListCreateGoal />
    <v-table>
      <thead>
        <tr>
          <th class="column__status"></th>
          <th class="column__title">Title</th>
          <th class="column__assignee">Assignee</th>
          <th class="cloumn__progress">Progress</th>
          <th class="column__menu"></th>
        </tr>
      </thead>
      <tbody>
        <span v-if="recentlyCreated.isLoading">Loading...</span>
        <GoalListTab v-else v-for="goalId in recentlyCreated.data" :key="goalId" :goal-id="goalId" />
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

<style scoped>
.column__status {
  width: 30px;
}
.column__title {
  width: 650px;
}
.column__menu {
  width: 50px;
}
</style>
