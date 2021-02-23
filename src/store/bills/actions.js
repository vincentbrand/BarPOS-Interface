import Api from '@/Http/Bills';
import { get as CookieGet } from 'js-cookie';

// 获取所有订单
export function setBills ({ commit }) {
  Api.getBillsActive().then((result) => {
    commit("SET_BILLS", result.data)
  })
}

// 获取订单详情
export function setBillsDetails ({ commit }, id) {
  Api.getBillsDetails(id).then((result) => {
    commit("SET_BILLS_DETAILS", result.data)
  })
}

// 添加一个订单
export function addBills ({ commit }, params) {
  return new Promise((resolve) => {
    let data = {
      venue_id: CookieGet("POS_VENUE_ID"),
      name: params.name,
      status: params.status || 0,
      products: params.products || 0,
      total: params.total || 0,
      employee_id: CookieGet("POS_USERID")
    }
    if (params.customer_id) {
      data.id = params.customer_id
    }
    Api.createBills(data).then(res => {
      commit("ADD_BILLS", res.data)
      resolve()
    })
  })
}

// 删除订单中的商品
export function removeBillsGoods ({ commit }, params) {
  Api.removeBillsItem(params.item.id).then(() => {
    commit("REMOVE_BILLS_GOODS", params)
  })
}

// 增加订单中的商品
export function addBillsGoods (_, params) {
  return new Promise (resolve => {
    Api.addBillsItem({
      bill_id: params.bill_id,
      employee_id: CookieGet("POS_USERID"),
      products: [
        {
          product_id: params.item.id,
          price: params.price,
          quantity: params.item.quantity || 1,
          type: params.type
        }
      ]
    }).then((result) => {
      resolve(result)
    })
  })
  
}

// 获取所有的商品及分类
export function setFoodCategory ({ commit }) {
  Api.getCategories().then(res => {
    let result = res.data
    result.forEach((cate) => {
      cate.products.forEach((pro) => {
        pro.quantity = 1
      })
    })
    commit("SET_FOOD_CATEGORY", result)
  })
}

// 获取所有保存的客户
export function setSystemUser ({ commit }) {
  const userList = [
    "Thomas",
    "Bjorn",
    "Vince",
    "Hugo",
    "Luca"
  ]
  commit("SET_SYSTEM_USER", userList)
}

// 添加一个客户到系统
export function addSystemUser ({ commit }, name) {
  return new Promise((resolve) => {
    commit("ADD_SYSTEM_USER", name)
    resolve()
  })
}

// 设置添加客户的model显示
export function setShowBillsModel ({ commit }, status) {
  commit("SET_SHOW_BILLS", status)
}

// 筛选存在系统中的用户
export function filterSystemUser ({ getters,commit }, name) {
  const systemUser = getters.getSystemUser
  let filterUser = []
  systemUser.forEach(item => {
    if (item.includes(name)) {
      filterUser.push(item)
    }
  })
  commit("SET_SYSTEM_USER", filterUser)
}

// 关闭订单
export async function userCloseBills (_, id) {
  const result = await Api.closeBills(id)
  return result
}