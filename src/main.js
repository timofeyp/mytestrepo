import Vue from 'vue'
import App from './App.vue'

import {store} from './store/index';
import router from './routes';

import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue);



import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';


new Vue({
  el: '#app',
  store,
  render: h => h(App)
})



