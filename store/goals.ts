import { defineStore } from 'pinia'
import * as goalAdapter from '~/adapters/goal'
import { goalRepo } from '~/models/Goal'
import { userGoalRepo } from '~/models/UserGoal'

export const useGoalsStore = defineStore({
  id: 'goal-store',
  state: () => ({
    isLoading: false,
    isValid: false
  }),
  actions: {
    async fetchGoals () {
      if (this.isValid) return

      this.isLoading = true
      const goalsPromise = goalAdapter.fetchGoals()
      const userGoalsPromise = goalAdapter.fetchUserGoals()
      const [goals, userGoals] = await Promise.all([goalsPromise, userGoalsPromise])

      goalRepo.save(goals)
      userGoalRepo.save(userGoals)

      this.isValid = true
      this.isLoading = false
    }
  },
  getters: {
    getGoalDetailById: () => {
      return (goalId: string) => {
        return goalRepo.withAllRecursive().find(goalId)
      }
    },
    getGoalDetailList: () => {
      return () => {
        return goalRepo.withAllRecursive().get()
      }
    }
  }
})
