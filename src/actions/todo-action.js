import { updateLocalStorage, getDataFromLocalStorage } from '../initialData'
const ADD_NEW_TODO = 'add_new_todo'
const TOGGLE_FINISHED = 'toggle_finished'

export const addNewTodo = (listId, task, date, tags) => {
  return (dispatch) => {
    const newTodo = {
      id: 'todo' + date,
      task,
      listId,
      tags,
      finished: false,
      deleted: false,
      created: new Date().toLocaleDateString('en-CA')
    }
    console.log('new todo', newTodo)
    dispatch({ type: ADD_NEW_TODO, payload: { newTodo } })
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
