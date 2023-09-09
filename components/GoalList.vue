<template>
  <v-container>
    <GoalFilters />
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
          :openCreateGoalModal="openCreateGoalModal"
        />
      </tbody>
    </v-table>

    <GoalFormModal
      :visible="showCreateGoalModal"
      :closeCreateGoalModal="closeCreateGoalModal"
    />
  </v-container>
</template>

<script lang="ts" setup>
import { useGoalsStore } from "~/store/goals";
import { storeToRefs } from "pinia";
import { ref } from "vue";

const goalStore = useGoalsStore();
const { recentlyCreated } = storeToRefs(goalStore);
const showCreateGoalModal = ref(false);

const openCreateGoalModal = (goalId: number) => {
  showCreateGoalModal.value = true;
};
const closeCreateGoalModal = () => {
  showCreateGoalModal.value = false;
};
</script>

<style scoped></style>
