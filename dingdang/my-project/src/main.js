import Vue from 'vue'
import App from './App.vue'
import router from './router'
import stores from './stores'
Vue.config.productionTip = false

new Vue({
  stores,
  router,
  render: h => h(App),
}).$mount('#app')
