//使用Vuex
import Vue from 'vue';
import Vuex from 'vuex';
import request from '@/utils/request.js';
Vuex.Store.prototype.$request = request;
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