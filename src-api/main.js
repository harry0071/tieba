// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'css/base.css';
import App from './App';
import router from './router';
import store from './store';
import request from '@/utils/request.js';

Vue.use(ElementUI);

Vue.config.productionTip = false;
Vue.prototype.$request = request;

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	store,
	components: {
		App
	},
	template: '<App/>'
})
