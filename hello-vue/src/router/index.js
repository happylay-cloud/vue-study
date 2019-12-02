import Vue from 'vue'
import Router from 'vue-router'

import Login from "../views/Login"
import Main from '../views/Main'

// 用于嵌套的路由组件
import UserProfile from '../views/user/Profile'
import UserList from '../views/user/List'

// 导入组件
import NotFound from '../components/NotFound'

Vue.use(Router);

export default new Router({
  // 路由模式
  mode: 'history',
  routes: [
    {
      // 登录页
      name: 'Login',
      path: '/login',
      component: Login
    },
    {
      // 首页
      name: 'Main',
      path: '/main',
      component: Main,

      // 配置嵌套路由
      children: [
        {name:'UserProfile',path: '/user/profile/:id', component: UserProfile},
        {name:'UserList',path: '/user/list/:id', component: UserList, props: true},
      ]
    },   
    {
       // 配置重定向
      path: '/goHome',
      redirect: '/main'
    },  
    { 
      // 处理 404
      path: '*',
      component: NotFound
    }
  ]
});