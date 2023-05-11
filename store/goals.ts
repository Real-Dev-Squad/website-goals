import { defineStore } from 'pinia'
import * as goalAdapter from '~/adapters/goal'
import { type PostGoal } from '~/interfaces/PostGoal'
import { goalRepo } from '~/models/Goal'

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
      const goals = await goalAdapter.fetchGoals()

      goalRepo.save(goals)

      this.isValid = true
      this.isLoading = false
    },
    async add (goal: PostGoal) {
      const goalResponse = await goalAdapter.addGoal(goal)

      goalRepo.save(goalResponse)
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
