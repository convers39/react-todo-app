import { updateLocalStorage, getDataFromLocalStorage } from '../initialData'

const ADD_NEW_LIST = 'add_new_list'
const REMOVE_LIST = 'remove_list'

export const addList = (listName) => {
  return (dispatch, getState) => {
    // update localStorage
    const newAllLists = getDataFromLocalStorage('lists')
    console.log('new all lists', newAllLists)
    newAllLists.push({ id: newAllLists.length + 1, name: listName })
    updateLocalStorage('lists', newAllLists)
    dispatch({ type: ADD_NEW_LIST, payload: { newAllLists } })
  }
}

export const removeList = (listId) => {
  return (dispatch) => {
    const allLists = getDataFromLocalStorage('lists')
    const newAllLists = allLists.filter((list) => list.id !== listId)
    updateLocalStorage('lists', newAllLists)
    dispatch({ type: REMOVE_LIST, payload: { newAllLists } })
  }
}
