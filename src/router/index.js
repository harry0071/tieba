import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/index.js';

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import(/* webpackChunkName: "index" */ '@/pages/index/Index.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "login" */ '@/pages/login/Login.vue'),
      meta:{
        requireNotLogin:true
      }
    },
    {
      path: '/register',
      name: 'register',
      component: () => import(/* webpackChunkName: "register" */ '@/pages/register/Register.vue'),
      meta:{
        requireNotLogin:true
      }
    },
    {
      path: '/create',
      name: 'create',
      component: () => import(/* webpackChunkName: "create" */ '@/pages/create/Create.vue'),
      meta:{
        requireLogin:true
      }
    },
    {
      path: '/edit/:blogId',
      name: 'edit',
      component: () => import(/* webpackChunkName: "edit" */ '@/pages/edit/Edit.vue'),
      meta:{
        requireLogin:true
      }
    },
    {
      path: '/detail/:blogId',
      name: 'detail',
      component: () => import(/* webpackChunkName: "detail" */ '@/pages/detail/Detail.vue')
    },
    {
      path: '/my',
      name: 'my',
      component: () => import(/* webpackChunkName: "my" */ '@/pages/my/My.vue'),
      meta:{
        requireLogin:true
      }
    },
    {
      path: '/user/:userId',
      name: 'user',
      component: () => import(/* webpackChunkName: "user" */ '@/pages/user/User.vue')
    },
    {
      path: "*",
      redirect: "/"
    }
  ]
});

router.beforeEach((to,from,next) =>{    
  if(to.matched.some(record => record.meta.requireLogin)){//如果该路由需要验证登录状态
    store.dispatch('checkLogin').then(isLogin=>{
      if(!isLogin){
        next({
          path:'/login',
          query:{redirect:to.fullPath}
        });
      } else{
        next();
      }      
    })
  } else if(to.matched.some(record => record.meta.requireNotLogin)){
    store.dispatch('checkLogin').then(isLogin=>{
      if(isLogin){
        next('/');
      } else {
        next();
      }
    });
  }
  else {
    next();
  }
})

export default router;
