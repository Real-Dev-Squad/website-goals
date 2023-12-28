import { useGoalsStore, type Filters } from "~/store/goals"

export const useGoalListQuery = ({ filters, page }: { filters: Filters, page: number }) => {
  const goalStore = useGoalsStore();
  const goalStoreRef = storeToRefs(goalStore)
  const query = { filters, page }

  watch(goalStoreRef.areQueriesValid, () => {
    if (!goalStore.areQueriesValid) {
      goalStore.fetchGoals(query)
    }
  })

  onMounted(() => {
    if (!goalStore.areQueriesValid) {
      goalStore.fetchGoals(query)
    }
  })

  const goal = computed(() => goalStore.getByQuery(query));

  console.log('here', goal.value.isLoading ? 'Loading': 'loaded', goal)
  return goal;
}