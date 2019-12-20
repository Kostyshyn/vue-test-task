import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  	headerItems: []
  },
  mutations: {
  	SET_HEADER_ITEMS(state, items){
        state.headerItems = items;
    }
  },
  actions: {
  	setHeaderItems({ commit }, items){
      commit('SET_HEADER_ITEMS', items);
    }
  }
});
