import Vue from 'vue';
import Vuex from 'vuex';
import { mutations, actions, getters } from './payments';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    coastList: [],
    loadedData: {},
    currentPage: 1,
    paginationLength: 0,
  },
  mutations,
  actions,
  getters,
  modules: {
  },
});
