//使用Vuex
import Vue from 'vue';
import Vuex from 'vuex';
import AV from 'leancloud-storage';
Vuex.Store.prototype.AV = AV;
Vue.use(Vuex);

import auth from './modules/auth.js';
import blog from './modules/blog.js';

const store = new Vuex.Store({
  modules: {
    auth,
    blog
  }
});

export default store;