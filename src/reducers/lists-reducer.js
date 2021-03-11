import * as ACTION from '../constants/lists-constant'

const listsReducer = (state = [], action) => {
  const { type, payload } = action
  switch (type) {
    case ACTION.FETCH_LISTS:
      return payload.allLists
    case ACTION.ADD_NEW_LIST:
      return payload.newAllLists
    case ACTION.REMOVE_LIST:
      return payload.newAllLists
    default:
      return state
  }
}

export default listsReducer
