import userGateway from '../gateway/user.gateway'

export const state = () => ({
  list: []
})

export const mutations = {
  setUserData (state, userData) {
    state.list = userData.map((user) => {
      return {
        id: user.id,
        roles: user.roles || {},
        username: user.username,
        firstName: user.first_name,
        lastName: user.last_name,
        githubDisplayName: user.github_display_name,
        picture: {
          publicId: user.picture?.publicId,
          url: user.picture?.url
        }
      }
    })
  }
}

export const actions = {
  fetchUsers: ({ commit, state }) => {
    if (state.list.length) { return }

    userGateway
      .getUsers()
      .then(members => commit('setUserData', members))
      .catch(e => console.error(e))
  }
}
