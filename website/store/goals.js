import { ERROR_MESSAGE } from '../constant/goal'

export const state = () => ({
  list: []
})

export const mutations = {
  add (state, goal) {
    state.list.push(goal)
  },
  remove (state, goalId) {
    const indexOfGoal = state.list.findIndex(goal => goal.id === goalId)
    if (indexOfGoal === -1) { throw new Error(ERROR_MESSAGE.GOAL_ID_NOT_FOUND) }
    state.list.splice(indexOfGoal, 1)
  }
}

export const actions = {
  addGoal ({ commit }, goal) {
    // POST request here
    commit('add', goal)
  }
}
