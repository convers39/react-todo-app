import { updateLocalStorage, getDataFromLocalStorage } from '../initialData'

const UPDATE_SHOWING_LIST = 'update_showing_list'
const UPDATE_TODO_ORDER = 'update_todo_order'

const TOGGLE_FINISHED = 'toggle_finished'

export const toggleFinished = (listId, todoId, value) => {
  return (dispatch, getState) => {
    const newList = [...getState().currentList.list]
    newList.forEach((todo) => {
      if (todo.id === todoId) todo.finished = value
    })
    console.log('toggle finished list', newList)
    updateLocalStorage(listId, newList)
    dispatch({ type: TOGGLE_FINISHED, payload: { listId, newList } })
  }
}

export const updateCurrentList = (newListId) => {
  return (dispatch) => {
    const newList = getDataFromLocalStorage(newListId)
    dispatch({ type: UPDATE_SHOWING_LIST, payload: { newListId, newList } })
  }
}

export const updateTodoOrder = (listId, newList) => {
  return (dispatch) => {
    updateLocalStorage(listId, newList)
    dispatch({ type: UPDATE_TODO_ORDER, payload: { listId, newList } })
  }
}
