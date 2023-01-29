export const state = () => ({
  list: []
})

export const mutations = {
  setUserData (state, userData) {
    state.list = userData.reduce((prev, user) => {
      if (user.incompleteUserDetails) { return prev }

      const data = {
        id: user.id,
        roles: user.roles || {},
        username: user.username,
        firstName: user.first_name,
        lastName: user.last_name,
        githubDisplayName: user.github_display_name,
        githubId: user.github_id,
        picture: {
          publicId: user.picture?.publicId,
          url: user.picture?.url
        }
      }

      return [...prev, data]
    }, [])
  }
}

export const actions = {
  async fetchUsers ({ commit, state }) {
    if (state.list.length) { return }

    const res = await this.$axios.$get('https://api.realdevsquad.com/members')
    commit('setUserData', res.members)
  }
}
