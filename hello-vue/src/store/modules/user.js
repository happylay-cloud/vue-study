const user = {
    // 因为模块化了，所以解决刷新问题的代码需要改造一下
    state: sessionStorage.getItem('userState') ? JSON.parse(sessionStorage.getItem('userState')) : {
      user: {
        username: ''
      }
    },
    getters: {
      getUser(state) {
        return state.user;
      }
    },
    // 同步调用
    mutations: {
      updateUser(state, user) {
        state.user = user;
      }
    },
    // 异步调用
    actions: {
      asyncUpdateUser(context, user) {
        context.commit('updateUser', user);
      }
    }
  };
  
  export default user;