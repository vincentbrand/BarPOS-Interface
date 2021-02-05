import Api from '@/Http/App/index';

// 设置用户的同志消息
export function setUserNotifications ({ commit }) {
  Api.getUserNotifications().then(res => {
    commit("SET_USER_NOTIFICATIONS", res.data)
  })
}

// 创建 客户
export function setCreateCustomer ({ commit }, params) {
  Api.createCustomer(params).then(res => {
    commit("SET_CREATE_CUSTOMER", res)
  })
}

// 获取 所有客户
export function setCustomer ({ commit }, params) {
  Api.getCustomer(params).then(res => {
    commit("SET_CUSTOMER", res.data)
  })
}

// 获取 sidebar nav
export function setSidebarNav ({ commit }, lang) {
  return new Promise((resolve) => {
    Api.getSidebarNav(lang).then(res => {
      commit("SET_SIDEBAR_NAV", res)
      resolve(res)
    })
  })
}
