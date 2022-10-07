import { URL } from '../constant/url'

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
        lastName: user.last_same,
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
    const baseURL = `${URL.BASE_RDS}/members`

    fetch(baseURL)
      .then(res => res.json())
      .then(res => commit('setUserData', res.members))
      .catch(e => console.error(e))
  }
}
