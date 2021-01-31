import Vue from 'vue'
import VueRouter from 'vue-router'
import { get as CookieGet } from 'js-cookie';

Vue.use(VueRouter)

const routes = [
  {
    path: '/bills',
    name: 'List',
    component: resolve => require(['@/views/List'], resolve)
  },
  {
    path: '/card',
    name: 'Card',
    component: resolve => require(['@/views/Card'], resolve)
  },
  {
    path: '/product',
    name: 'Product',
    component: resolve => require(['@/views/Product'], resolve)
  },
  {
    path: '/login',
    name: 'Login',
    component: resolve => require(['@/views/Login'], resolve)
  },
  {
    path: '/auth/login',
    name: 'AuthLogin',
    component: resolve => require(['@/views/AuthLogin'], resolve)
  },
  {
    path: '/employees',
    name: 'Employees',
    component: resolve => require(['@/views/Employees'], resolve)
  },
  {
    path: '/stats',
    name: 'Stats',
    component: resolve => require(['@/views/Stats'], resolve)
  },
  {
    path: '/setting',
    name: 'Setting',
    component: resolve => require(['@/views/Setting'], resolve)
  },
  {
    path: '/venue',
    name: 'Venue',
    component: resolve => require(['@/views/Venue'], resolve)
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})
router.beforeEach((to, _, next) => {
  // console.log(from)
  const nextRouter = [ '/login', '/auth/login' ]
  if ( !nextRouter.includes(to.path) && !CookieGet("POS_TOKEN") )
    next({ name: 'Login' })
  else
    next()
})
export default router
