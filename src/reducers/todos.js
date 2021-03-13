import * as ACTION from '../constants/todos'

const todosReducer = (state = { ids: [], items: {} }, action) => {
  const { type, payload } = action
  console.log('todos Reducer state', state, 'action', action)

  switch (type) {
    case ACTION.FETCH_TODOS: {
      return payload.todos
    }

    case ACTION.REORDER_TODO: {
      const { ids } = payload
      return { ...state, ids }
    }

    case ACTION.ADD_NEW_TODO:
      const { id, newTodo } = payload
      return {
        ...state,
        ids: [...state.ids, id],
        items: { ...state.items, [id]: newTodo }
      }

    case ACTION.UPDATE_TODO: {
      const { todoId, updatedTodo } = payload
      return {
        ...state,
        items: {
          ...state.items,
          [todoId]: updatedTodo
        }
      }
    }

    case ACTION.DELETE_TODO: {
      const { todoId } = payload
      const items = { ...state.items }
      delete items[todoId]
      return {
        ...state,
        ids: state.ids.filter((id) => id !== todoId),
        items
      }
    }

    case ACTION.TOGGLE_TODO: {
      const { todoId } = action.payload
      return {
        ...state,
        items: {
          ...state.items,
          [todoId]: {
            ...state.items[todoId],
            finished: !state.items[todoId].finished
          }
        }
      }
    }

    default:
      return state
  }
}

export default todosReducer
