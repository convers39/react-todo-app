import { updateLocalStorage, getDataFromLocalStorage } from '../initialData'

const UPDATE_SHOWING_LIST = 'update_showing_list'
const UPDATE_TODO_ORDER = 'update_todo_order'
const ADD_NEW_TODO = 'add_new_todo'
const TOGGLE_FINISHED = 'toggle_finished'

export const addNewTodo = ({ listId, task, date, tags }) => {
  return (dispatch, getState) => {
    const newTodo = {
      id: 'todo' + new Date().toUTCString(),
      task,
      listId,
      tags,
      date: date || new Date().toLocaleDateString('en-CA'),
      finished: false,
      deleted: false,
      created: new Date().toLocaleDateString('en-CA')
    }
    console.log('new todo', newTodo)
    const currentListId = getState().currentListId
    if (currentListId === listId) {
      dispatch({ type: ADD_NEW_TODO, payload: { newTodo } })
    } else {
      const targetList = getDataFromLocalStorage(listId)
      targetList.push(newTodo)
      updateLocalStorage(listId, targetList)
    }
  }
}

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
