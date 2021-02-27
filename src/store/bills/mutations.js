export function SET_BILLS (state, result) {
  state.billsList = result
}

export function SET_BILLS_DETAILS (state, result) {
  state.billsDetails = result
}

export function ADD_BILLS (state, result) {
  state.billsList.push(result)
}

export function REMOVE_BILLS_GOODS (state, result) {
  let bs = state.billsDetails
  let idx = result.idx
  bs.items.splice(idx, 1);
  state.billsDetails = bs
}

export function ADD_BILLS_GOODS (state, result) {
  let bs = state.billsDetails
  bs.items.push(result)
  state.billsDetails = bs
}

export function SET_FOOD_CATEGORY (state, result) {
  state.foodCategory = result
}

export function SET_SYSTEM_USER (state, result) {
  state.systemUser = result
}

export function SET_SHOW_BILLS (state, result) {
  state.isShowBillsModal = result
}

export function ADD_SYSTEM_USER (state, result) {
  state.systemUser.push(result)
}

export function SET_CUSTOMER_FAVORITES (state, result) {
  state.foodCategory.unshift(result)
}
