import { type PostGoal } from '~/interfaces/PostGoal'
import { goalRepo } from '~/models/Goal'
import * as goalAdapter from '~/adapters/goal'
import { defineStore } from 'pinia'

export interface Filters {
  [key: string]: string,
}

interface Query {
  data: {
    filters: Filters;
    pagination: {
      page: number;
      maxPage: number;
    };
    result: string[];
  }
  isLoading: boolean,
  isValid: boolean,
}

interface GoalStoreState {
  byId: {
    [key: string]: {
      isLoading: boolean
      isValid: boolean
    }
  }
  queries: {
    [key: string]: Query;
  },
  areQueriesValid: Boolean,
}

export const useGoalsStore = defineStore({
  id: 'goal-store',
  state: (): GoalStoreState => ({
    byId: {},
    queries: {},
    areQueriesValid: false,
  }),
  actions: {
    async fetchGoals({ filters, page }: any) {
      const query = getQuery({ filters, page });

      if (this.queries[query]?.isValid) return
      this.$patch({
        queries: {
          ...this.queries,
          [query]: {
            isLoading: true,
            isValid: false,
            data: {
              result: [],
              filters: filters,
              pagination: { },
            }
          }
        }
      })
      const goalsResponse = await goalAdapter.fetchGoals(query)
      const goals = goalsResponse.result
      goalRepo.save(goals)

      this.$patch({
        areQueriesValid: true,
        queries: {
          ...this.queries,
          [query]: {
            isLoading: false,
            isValid: true,
            data: {
              result: goals.map(goal => goal.id),
              filters: filters,
              pagination: {
                page,
                maxPage: goalsResponse.meta.pagination.pages,
              },
            }
          }
        },
      })
    },
    async add(goal: PostGoal) {
      const goalResponse = await goalAdapter.addGoal(goal)

      goalRepo.save(goalResponse)

      this.queries = {}
    },
    async patch(goalId: string, goal: PostGoal) {
      const prevGoal = goalRepo.find(goalId)
      goalRepo.save({
        id: goalId,
        ...prevGoal,
        ...goal
      })

      await goalAdapter.updateGoal(goalId, goal)
    },
    async delete(goalId: string) {
      goalRepo.destroy(goalId)

      await goalAdapter.deleteGoal(goalId)

      this.areQueriesValid = false
      this.queries = {}
    },
    async fetchById(goalId: string) {
      const goal = goalRepo.find(goalId)

      if (!goal) {
        this.byId = {
          [goalId]: {
            isLoading: true,
            isValid: false
          }
        }

        const goal = await goalAdapter.fetchGoalById(goalId)
        goalRepo.save(goal)
        this.byId = {
          [goalId]: {
            isLoading: false,
            isValid: true,
          }
        }
      } else {
        this.byId = {
          [goalId]: {
            isLoading: false,
            isValid: true,
          }
        }
      }
    },
  },
  getters: {
    getById: (state) => {
      return (goalId: string) => {
        const data = goalRepo.find(goalId)

        if (!data) throw new Error("Goal not found");
        
        return {
          isLoading: false,
          isValid: true,
          data,
        }
      }
    },
    getByQuery: (state) => {
      return ({ filters, page }: { filters: Filters, page: number }) => {
        const query = getQuery({ filters, page });

        if (!state.queries[query]) return {
          isValid: false,
          isLoading: false,
          data: undefined,
        }
        return state.queries[query]
      }
    }
  }
})

export function getQuery({ filters, page }: { filters: Filters, page: number }) {
  let queryObj = {
    ...filters,
    'page[number]': page,
  }

  let query =
    Object.entries(queryObj)
      .map(([key, value]) => `${key}=${value}`)
      .join('&')

  return query;
}