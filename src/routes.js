
const routes = [
  {
    path: '/',
    meta: {
      title: 'nav1'
    },
    component: require('./components/Hello.vue')
  },
  {
    name: 'home',
    path: '/home',
    meta: {
      title: 'Home'
    },
    component: require('./components/Home.vue')
  },
  {
    name: 'one',
    path: '/one',
    meta: {
      title: 'One',
      requiresAuth: true,
    },
    component: require('./components/One.vue'),
  },
  {
    path: '*',
    meta: {
      title: '404'
    },
    component: require('./components/404.vue'),
  },
]

export default routes
