import { updateLocalStorage, getDataFromLocalStorage } from '../initialData'
import * as ACTION from '../constants/list-constant'

export const deleteTodo = (listId, todoId) => {
  return (dispatch, getState) => {
    const targetList = getDataFromLocalStorage(listId)
    const newList = targetList.filter((todo) => todo.id !== todoId)
    updateLocalStorage(listId, newList)
    const currentListId = getState().currentList.currentListId
    if (currentListId === listId) {
      dispatch({ type: ACTION.DELETE_TODO, payload: { listId, newList } })
    }
  }
}

export const editTodo = (todoId, updatedTodo) => {
  return (dispatch, getState) => {
    // check if list id changed
    const { listId } = updatedTodo
    const currentList = getState().currentList
    const currentListId = currentList.currentListId

    const [todo] = currentList.list.filter((todo) => todo.id === todoId)

    const targetList = getDataFromLocalStorage(listId)

    if (currentListId === listId) {
      // updated list id is the same as current list, then update the todo item
      const newList = targetList.map((todo) => {
        if (todo.id === todoId) todo = { ...todo, ...updatedTodo }
        return todo
      })
      console.log('edit todo action', listId, newList)
      updateLocalStorage(listId, newList)
      dispatch({ type: ACTION.EDIT_TODO, payload: { listId, newList } })
    } else {
      // change current list
      const updatedCurrentList = currentList.list.filter(
        (todo) => todo.id !== todoId
      )
      console.log('move todo action', listId, updatedCurrentList)
      updateLocalStorage(currentListId, updatedCurrentList)
      // update todo and push to target list
      const updated = { ...todo, ...updatedTodo }
      targetList.push(updated)
      updateLocalStorage(listId, targetList)
      dispatch({
        type: ACTION.MOVE_TODO,
        payload: { newList: updatedCurrentList }
      })
    }
  }
}

export const addNewTodo = ({ listId, task, date, tags }) => {
  return (dispatch, getState) => {
    const newTodo = {
      id: `todo_${Date.now()}`,
      task,
      listId,
      tags,
      date: date || new Date().toLocaleDateString('en-CA'),
      finished: false,
      deleted: false,
      created: new Date().toLocaleDateString('en-CA')
    }

    const targetList = getDataFromLocalStorage(listId)
    targetList.push(newTodo)
    updateLocalStorage(listId, targetList)
    console.log('new todo', newTodo)
    const currentListId = getState().currentList.currentListId
    if (currentListId === listId) {
      dispatch({ type: ACTION.ADD_NEW_TODO, payload: { newTodo } })
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
    dispatch({ type: ACTION.TOGGLE_FINISHED, payload: { listId, newList } })
  }
}

export const updateCurrentList = (newListId) => {
  return (dispatch) => {
    const newList = getDataFromLocalStorage(newListId)
    dispatch({
      type: ACTION.UPDATE_SHOWING_LIST,
      payload: { newListId, newList }
    })
  }
}

export const updateTodoOrder = (listId, newList) => {
  return (dispatch) => {
    updateLocalStorage(listId, newList)
    dispatch({ type: ACTION.UPDATE_TODO_ORDER, payload: { listId, newList } })
  }
}
