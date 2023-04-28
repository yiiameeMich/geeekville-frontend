import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import store from './store'
import router from './router'

Vue.config.productionTip = false

//TODO: BACKEND
// 1.EMPTY
//TODO: FRONTEND
// 1. Create pages for Verified accounts and UnVerified ones

new Vue({
  vuetify,
  store,
  router,
  render: h => h(App)
}).$mount('#app')
