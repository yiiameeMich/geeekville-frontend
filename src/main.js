import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import store from './store'
import router from './router'

Vue.config.productionTip = false

//TODO: BACKEND
// 1.Create methods to get products
// 2.Create methods to upload product image and profile image
//TODO: FRONTEND
// 1. Create page to see products as admin
// 2. After there is a possibility to upload images ----> create a page to see products as a user

new Vue({
  vuetify,
  store,
  router,
  render: h => h(App)
}).$mount('#app')
