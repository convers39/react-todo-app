import { updateLocalStorage, getDataFromLocalStorage } from '../initialData'
import * as ACTION from '../constants/lists-constant'

export const fetchLists = () => {
  return (dispatch) => {
    const allLists = getDataFromLocalStorage('lists')
    dispatch({ type: ACTION.FETCH_LISTS, payload: { allLists } })
  }
}

export const addList = (listName) => {
  return (dispatch, getState) => {
    // update localStorage
    const newAllLists = getDataFromLocalStorage('lists')
    // const newAllLists = getState().allLists
    console.log('new all lists', newAllLists)
    newAllLists.push({ id: newAllLists.length + 1, name: listName })
    updateLocalStorage('lists', newAllLists)
    dispatch({ type: ACTION.ADD_NEW_LIST, payload: { newAllLists } })
  }
}

export const removeList = (listId) => {
  return (dispatch) => {
    const allLists = getDataFromLocalStorage('lists')
    const newAllLists = allLists.filter((list) => list.id !== listId)
    updateLocalStorage('lists', newAllLists)
    dispatch({ type: ACTION.REMOVE_LIST, payload: { newAllLists } })
  }
}
