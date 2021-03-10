import { getDataFromLocalStorage } from '../initialData'

const ADD_NEW_LIST = 'add_new_list'
const REMOVE_LIST = 'remove_list'
const FETCH_LISTS = 'fetch_lists'

// const initialLists = getDataFromLocalStorage('lists')

const listsReducer = (state = [], action) => {
  const { type, payload } = action
  switch (type) {
    case FETCH_LISTS:
      return payload.allLists
    case ADD_NEW_LIST:
      return payload.newAllLists
    case REMOVE_LIST:
      return payload.newAllLists
    default:
      return state
  }
}

export default listsReducer
