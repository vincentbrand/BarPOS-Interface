import Vue from 'vue'
import VueRouter from 'vue-router'
import { get as CookieGet } from 'js-cookie';

Vue.use(VueRouter)

const routes = [
  {
    path: '/bills/:id',
    name: 'List',
    component: resolve => require(['@/views/List'], resolve)
  },
  {
    path: '/card',
    name: 'Card',
    component: resolve => require(['@/views/Card'], resolve)
  },
  {
    path: '/products',
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
    path: '/forgot',
    name: "Forgot",
    component: resolve => require(['@/views/Forgot'], resolve)
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
    path: '/settings',
    name: 'Setting',
    component: resolve => require(['@/views/Setting'], resolve)
  },
  {
    path: '/venues',
    name: 'Venue',
    component: resolve => require(['@/views/Venue'], resolve)
  },
  {
    path: '/venues/add',
    name: 'AddVenue',
    component: resolve => require(['@/views/AddVenue'], resolve)
  },
  {
    path: '/bills/setting',
    name: 'BillsSetting',
    component: resolve => require(['@/views/BillsSetting'], resolve)
  },
  // 重定向
  {
    path: '/',
    redirect: '/auth/login'
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

// 路由拦截
/**
 * 对于为登陆系统的用户
 * 进行拦截
 * 提示登陆操作
 */
router.beforeEach((to, _, next) => {
  const nextRouter = [ '/auth/login' ]
  const isSupervisorLogin = CookieGet("POS_SUPERVISOR") ? true : false
  const isEmployeesLogin = CookieGet("POS_TOKEN") ? true : false
  // 验证路由
  if (nextRouter.includes(to.path) ) {
    // 特定路由放行
    if (isSupervisorLogin && isEmployeesLogin) {
      next({ name: 'List' })
    } else if (isSupervisorLogin && !isEmployeesLogin) {
      next({ name: "Login" })
    } else if (!isSupervisorLogin && !isEmployeesLogin) {
      next()
    }
  } else {
    // 其他路由验证
    if (isSupervisorLogin) { // 主管已经登陆 -> 到员工登陆界面
      console.log('主管已经登陆 -> 到员工登陆界面')
      if ( !isEmployeesLogin && (to.path !== '/login') ) { // 员工没有登陆
        console.log("员工没有登陆")
        next({ name: 'Login' })
      } else { // 员工已登陆
        console.log("员工已登陆")
        next()
      }
    } else { // 主管美有登陆 -> 主管去登陆
      console.log('主管美有登陆 -> 主管去登陆')
      next({ name: 'AuthLogin' })
    }
  }

  // if ( !nextRouter.includes(to.path) && !CookieGet("POS_TOKEN") )
  //   next({ name: 'Login' })
  // else
  //   next()
})


export default router
