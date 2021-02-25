export function SET_USER_NOTIFICATIONS (state, result) {
  state.notifications = result
}

export function SET_CREATE_CUSTOMER (state, result) {
  state.customer.push(result)
}

export function SET_CUSTOMER (state, result) {
  state.customer = result
}

export function SET_SIDEBAR_NAV (state, result) {
  state.sidebar = result
  state.sidebarKey = Object.keys(result)
}

export function SET_SYSTEM_SETTINGS (state, result) {
  state.settings = result
}
