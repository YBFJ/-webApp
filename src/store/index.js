import Vue from 'vue';
import Vuex from 'vuex';
import state from './state';
import mutations from './mutations';

Vue.use(Vuex);

export default new Vuex.Store({
  state: state,
  // actions: {
  // 异步的方法
  //   changeCity (ctx, city) {
  //     ctx.commit('changeCity', city)
  //   }
  // }
  mutations: mutations
  // getters: {
  //   // getters类似于组件里的computed作用，起到计算作用，避免数据的冗余
  //   doubleCity(state) {
  //     return state.city + ' ' + state.city;
  //   }
  // }
});
