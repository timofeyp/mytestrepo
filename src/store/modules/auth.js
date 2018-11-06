import server from '~/server';

export default {
  namespaced: true,
  state: {
        x: 1
  },
  getters: {
    test(state){
      console.log(state.x)
      return state.x
    }
  },
  mutations: {


  },
  actions: {

    login(state, data) {
      console.log(data)
      return new Promise((resolve, reject) => {
        server.put('v1/entrance/login', data).then((response) => {
          console.log(response);
          resolve();
        });
      })
    }
  }
}
