import { type PostGoal } from '~/interfaces/PostGoal'
import { goalRepo } from '~/models/Goal'
import * as goalAdapter from '~/adapters/goal'
import { defineStore } from 'pinia'

type GoalStoreState =
  | {
    byId: {
      [key: string]: {
        isLoading: boolean
        isValid: boolean
      }
    }
    recentlyCreated: {
      isLoading: boolean
      isValid: boolean
      data: string[] | undefined
    },
  }

export const useGoalsStore = defineStore({
  id: 'goal-store',
  state: (): GoalStoreState => ({
    byId: {},
    recentlyCreated: {
      isLoading: false,
      isValid: false,
      data: undefined
    },
  }),
  actions: {
    async fetchGoals() {
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
    async add(goal: PostGoal) {
      const goalResponse = await goalAdapter.addGoal(goal)

      goalRepo.save(goalResponse)

      if (!this.recentlyCreated.data) {
        this.recentlyCreated.data = [goalResponse.id]
      } else {
        this.recentlyCreated.data.unshift(goalResponse.id)
      }
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
        const goalState = state.byId[goalId];

        return {
          isLoading: goalState.isLoading,
          isValid: goalState.isValid,
          data: goalRepo.find(goalId)
        }
      }
    }
  }
})