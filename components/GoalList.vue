<template>
  <v-container>
    <span v-if="recentlyCreated.isLoading">Loading...</span>
    <v-table v-else>
      <thead>
        <tr>
          <th class="text-left">Title</th>
          <th class="text-left">Status</th>
          <th>Assignee</th>
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
