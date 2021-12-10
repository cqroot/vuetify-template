import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    drawer: null,
    night: false,
  },
  mutations: {
    setDrawer(state, payload) {
      state.drawer = payload;
    },
    setNight(state, payload) {
      state.night = payload;
    },
  },
  actions: {},
  modules: {},
});
