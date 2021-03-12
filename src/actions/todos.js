import db from '../utils/index'
import * as ACTION from '../constants/list'

export const addTodo = ({ listId, task, date, tags }) => {
  return (dispatch) => {
    const id = `todo_${Date.now()}`
    const newTodo = {
      id,
      task,
      listId,
      tags,
      date: date || new Date().toLocaleDateString('en-CA'),
      finished: false,
      deleted: false,
      created: new Date().toLocaleDateString('en-CA')
    }
    // update DB
    const { ids, items } = db.get('todos')
    ids.push(id)
    items.id = newTodo
    db.set('todos', { ids, items })

    dispatch({ type: ACTION.ADD_NEW_TODO, payload: { id, newTodo } })
  }
}

export const deleteTodo = (todoId) => {
  return (dispatch) => {
    // update DB
    let { ids, items } = db.get('todos')
    ids = ids.filter((id) => id !== todoId)
    delete items.id
    db.set('todos', { ids, items })

    dispatch({ type: ACTION.DELETE_TODO, payload: { todoId } })
  }
}

export const updateTodo = (todoId, updatedTodo) => {
  return (dispatch) => {
    const { ids, items } = db.get('todos')
    items[todoId] = updatedTodo
    db.set('todos', { ids, items })

    dispatch({ type: ACTION.UPDATE_TODO, payload: { todoId, updatedTodo } })
  }
}

export const toggleFinished = (todoId) => {
  return (dispatch) => {
    const { ids, items } = db.get('todos')
    items[todoId].finished = !items[todoId].finished
    db.set('todos', { ids, items })
    dispatch({ type: ACTION.TOGGLE_TODO, payload: { todoId } })
  }
}

export const updateTodoOrder = (sourceId, destinationId) => {
  return (dispatch) => {
    const { ids, items } = db.get('todos')
    const sourceIndex = ids.indexOf(sourceId)
    const destinationIndex = ids.indexOf(destinationId)

    let temp = ids[sourceIndex]
    ids[sourceIndex] = ids[destinationIndex]
    ids[destinationIndex] = temp
    // [ids[sourceIndex],ids[destinationIndex]] = [ids[destinationIndex],ids[sourceIndex]]
    db.set('todos', { ids, items })
    dispatch({ type: ACTION.REORDER_TODO, payload: { ids } })
  }
}
