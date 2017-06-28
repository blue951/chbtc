// import 'babel-polyfill';
import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store'
import App from './App.vue'
// import routes from './config/routes'
import router from './router'
import iView from 'iview';

import axios from 'axios'
Vue.prototype.$http = axios;  


// const router = new VueRouter({
// 	//mode: 'history',
//   	routes
// });

Vue.use(VueRouter);
Vue.use(iView);



let aaa = new Vue({
	el: '#app',
	router,
	store,
	render: (h) => h(App)
})
