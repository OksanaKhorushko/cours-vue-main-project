import {
  coasts,
} from '../mocks/mockData';

export const mutations = {
  saveCoast: (state, paylad) => state.coastList.push(paylad),
  editCoast: (state, payload) => {
    state.coastList = state.coastList.map(coast => +coast.id === payload.id ? payload : coast);
  },
  saveCoastList: (state, payload) => {
    state.coastList = payload;
  },
  addLoadedData: (state, payload) => {
    state.loadedData[payload.key] = payload.data;
  },
  deleteCoast: (state, id) => {
    const index = state.coastList.findIndex(coast => coast.id === id);
    state.coastList.splice(index, 1);
  },
  setPaginationLength: (state, length) => {
    state.paginationLength = length;
  },
};

export const getters = {
  getCoastById: state => id => {
    return state.coastList.find(coast => +coast.id === +id);
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
          resolve({currentPageData: coasts[currentPage], pages: Object.keys(coasts).length });
        }, 1000);
      })
      .then(res => {
        commit('addLoadedData', { key: currentPage, data: res.currentPageData });
        commit('saveCoastList', res.currentPageData);
        commit('setPaginationLength', res.pages);
      });
  },
};
