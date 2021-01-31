import Api from '@/Http/App/index';

export function setUserNotifications ({ commit }) {
  Api.getUserNotifications().then(res => {
    commit("SET_USER_NOTIFICATIONS", res.data)
  })
}