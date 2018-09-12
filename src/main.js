// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'css/base.css';
import App from './App';
import router from './router';
import store from './store';

import AV from 'leancloud-storage';
var APP_ID = 'lhj68vm1HGY1fLoF2kYdk9vl-gzGzoHsz';
var APP_KEY = '7oA6nJap2k9xxvmntomBOFBl';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});

Vue.use(ElementUI);

Vue.config.productionTip = false;
Vue.prototype.AV = AV;

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
