// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router.js'
import nav1 from './components/nav1'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

//router.push({ name: 'home' })