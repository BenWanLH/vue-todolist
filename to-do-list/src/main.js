import Vue from 'vue'
import App from './App.vue'
import 'element-ui/lib/theme-chalk/index.css';
// import ElementUI from 'element-ui'
import Vuex from "vuex";
import store from './store/store'

// Vue.use(ElementUI);
Vue.use(Vuex);
Vue.config.productionTip = false



new Vue({
  render: h => h(App),
  store:store
}).$mount('#app')
