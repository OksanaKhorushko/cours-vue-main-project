import {
  coasts,
} from '../mocks/mockData';

export const mutations = {
  saveCoast: (state, paylad) => state.coastList.push(paylad),
  saveCoastList: (state, payload) => {
    state.coastList = payload;
  },
  addLoadedData: (state, payload) => {
    state.loadedData[payload.key] = payload.data;
  },
};

export const actions = {
  fetchData({
    commit,
    state,
  }, page) {
    const currentPage = `page ${page}`;

    if (currentPage in state.loadedData) {
      commit('saveCoastList', state.loadedData[currentPage]);

      return;
    }

    return new Promise(resolve => {
        setTimeout(() => {
          resolve(coasts[currentPage]);
        }, 1000);
      })
      .then(res => {
        commit('addLoadedData', { key: currentPage, data: res });
        commit('saveCoastList', res);
      });
  },
};
