import { getDataFromLocalStorage } from '../initialData'

const ADD_NEW_LIST = 'add_new_list'
const REMOVE_LIST = 'remove_list'

const initialLists = getDataFromLocalStorage('lists')

const listsReducer = (state = { allLists: initialLists }, action) => {
  const { type, payload } = action
  switch (type) {
    case ADD_NEW_LIST:
      return { allLists: payload.newAllLists }
    case REMOVE_LIST:
      return { allLists: payload.newAllLists }
    default:
      return state
  }
}

export default listsReducer
