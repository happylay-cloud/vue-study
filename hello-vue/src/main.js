import Vue from 'vue'
import VueRouter from 'vue-router'
import router from './router'
import store from './store'

// 导入 ElementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import App from './App'

import axios from 'axios'

Vue.config.productionTip = false;
// 原型链
Vue.prototype.axios = axios;

import Vuex from 'vuex'

// 安装状态管理模式
Vue.use(Vuex);
// 安装 ElementUI
Vue.use(ElementUI);
// 安装路由
Vue.use(VueRouter);

// 在跳转前执行,根据路由设置标题
router.beforeEach((to, form, next) => {
    // 路由发生改变修改页面的title
    if(to.meta.title) {
      document.title = to.meta.title
    }

  // 获取用户登录状态
  let isLogin = sessionStorage.getItem('isLogin');

  // 注销
  if (to.path == '/logout') {
    // 清空
    sessionStorage.clear();
    // 跳转到登录
    next({path: '/login'});
  }

  // 如果请求的是登录页
  else if (to.path == '/login') {
    if (isLogin != null) {
      // 跳转到首页
      next({path: '/main'});
    }
  }

  // 如果为非登录状态
  else if (isLogin == null) {
    // 跳转到登录页
    next({path: '/login'});
  }

  // 下一个路由
  next();
});

new Vue({
  el: '#app',
  store,
  // 启用路由
  router,
  // 启用 ElementUI
  render: h => h(App)
});