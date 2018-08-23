import url from '@/utils/api.js';

const state = {
	userInfo:null,
	isLogin:false
};

const getters = {};

const mutations = {
	setUserInfo(state,data){
		state.userInfo = data;
	},
	setIsLogin(state,data){
		state.isLogin = data;
	},
};

const actions = {
	login({commit},{username,password}){
		return this.$request(url.login,{username,password},'post')
		.then(res=>{
			commit('setUserInfo',res.data);
			commit('setIsLogin',true);
		});
	},
	register({commit},{username,password}){
		return this.$request(url.register,{username,password},'post')
		.then(res=>{
			commit('setUserInfo',res.data);
			commit('setIsLogin',true);
		});
	},
	logout({commit}){
		return this.$request(url.logout)
		.then(()=>{
			commit('setUserInfo',null);
			commit('setIsLogin',false);
		});
	},
	checkLogin({commit, state}){
		if(state.isLogin){
			return true;
		} else {
			return this.$request(url.auth)
			.then(res=>{
				commit('setIsLogin',res.isLogin);
				if(res.isLogin){
					commit('setUserInfo',res.data);
					return true;
				} else {
					return false;
				}
			});
		}
	},
};

export default {
  state,
  getters,
  mutations,
  actions
}