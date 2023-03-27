import { FETCH_POLICY } from "../constant/dataLayer";

export const state = () => ({
  goals: {
    byId: {},         // Goal actual data mapped to their ID
    allIds: {
      valid: false,
      loading: false,
      data: [],
    },
  },
})

export const mutations = {
  replaceByIds (state, goalsMappedById) {
    state.goals.byId = goalsMappedById;
    const allIds = Object.keys(goalsMappedById);
    state.goals.allIds.data = allIds;
    state.goals.allIds.valid = true;
  },
  setAllIdsFetching (state, isLoading) {
    state.goals.allIds.loading = isLoading;
  }
}

export const actions = {
  add ({ commit }, goal) {
    commit('add', goal)
  },
  async fetchAll({ 
    commit, 
    dispatch, 
    state 
  }, options) {
    const adjustedOptions = { 
      fetchPolicy: FETCH_POLICY.CACHE_FIRST,
      ...options,
    }

    if (adjustedOptions.fetchPolicy === FETCH_POLICY.CACHE_FIRST && state.goals.allIds.valid === true) return;
    if (state.goals.allIds.loading === true) return;
    const goalsMappedById = dispatch('jv/get', 'goal/', { root: true });
    commit('setAllIdsFetching', true)
    commit('replaceByIds', await goalsMappedById);
    commit('setAllIdsFetching', false);
  },
}

export const getters = {
  getGoalList (state) {
    const list = state.goals.allIds.data.map(id => state.goals.byId[id]);
    return list;
  },
  getGoalById: (state) => (id) => {
    const goal = state.goals.byId[id];
    return goal;
  }
}