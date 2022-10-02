export const state = () => ({
  list: []
})

export const mutations = {
  add (state, goal) {
    state.list.push(goal)
  },
  remove (state, goalId) {
    const indexOfGoal = state.list.find(goal => goal.id === goalId)
    state.list.splice(indexOfGoal, 1)
  }
}
