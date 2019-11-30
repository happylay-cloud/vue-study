import Vue from 'vue'
import VueRouter from 'vue-router'
import router from './router'
import store from './store'


// 导入 ElementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import Vuex from 'vuex'
import App from './App'

// 引用 Axios
import axios from 'axios'
Vue.prototype.axios = axios;

// 安装状态管理模式
Vue.use(Vuex);
// 安装路由
Vue.use(VueRouter);

// 安装 ElementUI
Vue.use(ElementUI);

// 在跳转前执行
router.beforeEach((to, form, next) => {
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
  // 启用路由
  router,
  store,
  // 启用 ElementUI
  render: h => h(App)
});