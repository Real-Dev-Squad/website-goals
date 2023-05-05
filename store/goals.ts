import { defineStore } from 'pinia'
import * as goalAdapter from '~/adapters/goal'
import { type PostGoal } from '~/interfaces/PostGoal'
import { goalRepo } from '~/models/Goal'
import { userGoalRepo } from '~/models/UserGoal'

type GoalStoreState =
  | {
    recentlyCreated: {
      isLoading: true
      isValid: false
      data: null
    }
  }
  | {
    recentlyCreated: {
      isLoading: false
      isValid: boolean
      data: string[] | undefined
    }
  }

export const useGoalsStore = defineStore({
  id: 'goal-store',
  state: (): GoalStoreState => ({
    recentlyCreated: {
      isLoading: false,
      isValid: false,
      data: undefined
    }
  }),
  actions: {
    async fetchGoals () {
      if (this.recentlyCreated.isValid) return

      this.$patch({
        recentlyCreated: {
          isLoading: true
        }
      })
      const goalsPromise = goalAdapter.fetchGoals()
      const userGoalsPromise = goalAdapter.fetchUserGoals()
      const [goals, userGoals] = await Promise.all([goalsPromise, userGoalsPromise])

      goalRepo.save(goals)
      userGoalRepo.save(userGoals)

      this.$patch({
        recentlyCreated: {
          isLoading: false,
          isValid: true,
          data: goals.map(goal => goal.id).reverse()
        }
      })
    },
    async add (goal: PostGoal) {
      const goalResponse = await goalAdapter.addGoal(goal)

      goalRepo.save(goalResponse)
      this.recentlyCreated.data?.unshift(goalResponse.id)
    }
  },
  getters: {
    getGoalDetailById: () => {
      return (goalId: string) => {
        return goalRepo.withAllRecursive().find(goalId)
      }
    }
  }
})
