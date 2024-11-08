import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

import nProgress from 'nprogress'
import 'nprogress/nprogress.css'
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  nProgress.start()
  next()
})

router.afterEach(() => {
  nProgress.done()
})
export default router
