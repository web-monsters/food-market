export const state = () => ({
  title: 'About!',
  currentUser: {},
});

export const mutations = {
  SET_CURRENT_USER (state, user) {
    state.currentUser = user;
  },
};

export const actions = {
  /**
   * setCurrentUser
   */
  async setCurrentUser ({ commit }) {
    let data = await this.$axios.get('https://jsonplaceholder.typicode.com/users/');

    commit('SET_CURRENT_USER', data.data[0]);
  },

  // /**
  //  * setBreadcrumbs
  //  */
  // setBreadcrumbs (ctx) {
  //   commit('SET_BREADCRUMBS', breadcrumbs);
  // },
};

export const getters = {
  getTitle: (state, getters) => state.title,
  getCurrentUser: (state) => state.currentUser,
};
