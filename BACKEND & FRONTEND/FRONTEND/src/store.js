import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    userLog: "",
    logueo: false,
    control: true
  },
  getters: {
    userLog: state => {
      return state.userLog;
    },
    logueo: state => {
      return state.logueo;
    }
  },
  mutations: {
    userLog(state, data) {
      state.userLog = data;
    },
    logueo(state, data) {
      state.logueo = data;
      if (data == false) {
        state.userLog = "";
      }
    },
    control(state, data) {
      state.control = data;
    }
  },
  actions: {}
});

export default store;
