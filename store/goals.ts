import { type PostGoal } from '~/interfaces/PostGoal'
import { goalRepo } from '~/models/Goal'
import * as goalAdapter from '~/adapters/goal'
import { defineStore } from 'pinia'

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
      const goals = await goalAdapter.fetchGoals()
      goalRepo.save(goals)

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
    },
    async patch (goalId: string, goal: PostGoal) {
      const prevGoal = goalRepo.find(goalId)
      goalRepo.save({
        id: goalId,
        ...prevGoal,
        ...goal
      })

      await goalAdapter.updateGoal(goalId, goal)
    }
  },
  getters: {
    getGoalDetailById: () => {
      return (goalId: string) => {
        const goal = goalRepo.withAllRecursive().find(goalId)
        if (goal == null) throw Error('Goal not found')

        return goal
      }
    }
  }
})