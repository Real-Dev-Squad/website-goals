<template>
  <v-container class="d-flex flex-column goal-list">
    <GoalListCreateGoal />
    <v-table class="goal-table">
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
        <template v-if="goalList">
          <GoalListTab v-for="goal in goalList.result" :key="goal.id" :goal="goal" />
        </template>
      </tbody>
    </v-table>
    <v-pagination v-if="maxPage" :length="goalList?.meta.pagination.pages || maxPage" v-model="state.page"></v-pagination>  
  </v-container>
</template>

<script lang="ts" setup>
import { useGoalListQuery } from '~/store/goals';
const state = reactive({
  page: 1,
  filters: {},
})
const maxPage = ref(0);

const { data: goalList } = useGoalListQuery(state);

watch(goalList, (goalList) => {
  if (goalList?.meta.pagination.pages) {
    maxPage.value = goalList.meta.pagination.pages;
  }
})
</script>

<style scoped>
.goal-list {
  height: 830px;
}

.goal-table {
  flex: 1;
}
</style>
