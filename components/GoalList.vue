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
        <template v-if="!goal.isLoading">
          <GoalListTab v-for="goalId in goal.data?.result" :key="goalId" :goal-id="goalId" />
        </template>
      </tbody>
    </v-table>
    <v-pagination v-if="state.maxPage" :length="goal.data?.pagination.maxPage || state.maxPage" v-model="state.page"></v-pagination>  
  </v-container>
</template>

<script lang="ts" setup>
const state = reactive({
  page: 1,
  filters: {},
  maxPage: null as number | null,
})

const goal = useGoalListQuery({ filters: state.filters, page: state.page });

watch(goal, (newValue, oldValue) => {
  const newGoal = toRaw(newValue)

  console.log(newGoal, newGoal.data, newGoal.data?.pagination)
  if (newGoal.data?.pagination.maxPage) {
    state.maxPage = newGoal.data.pagination.maxPage
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
