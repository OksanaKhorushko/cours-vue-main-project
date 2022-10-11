import Vue from 'vue';
import Vuex from 'vuex';
import { mutations, actions } from './payments';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    coastList: [],
    loadedData: {},
    currentPage: 1,
  },
  getters: {
  },
  mutations,
  actions,
  modules: {
  },
});
