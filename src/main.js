// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router.js'
import store from './store/index.js'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

//router.push({ name: 'home' })