export function SET_BILLS (state, result) {
  state.billsList = result
}

export function ADD_BILLS (state, result) {
  state.billsList.push(result)
}

export function REMOVE_BILLS_GOODS (state, result) {
  let bs = state.billsList
  let userIdx = result.userIdx
  let idx = result.idx
  bs[userIdx].items.splice(idx, 1);
  state.billsList = bs
}

export function ADD_BILLS_GOODS (state, result) {
  let bs = state.billsList
  let userIdx = result.userIdx
  bs[userIdx].items = [...bs[userIdx].items, ...result.items]
  state.billsList = bs
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
