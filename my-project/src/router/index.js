import Vue from 'vue'
import VueRouter from 'vue-router'
import Basic from '../components/Basic.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Basic',
    component: Basic
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
