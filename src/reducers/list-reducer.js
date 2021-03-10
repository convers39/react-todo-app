const UPDATE_SHOWING_LIST = 'update_showing_list'
const UPDATE_TODO_ORDER = 'update_todo_order'
const TOGGLE_FINISHED = 'toggle_finished'
const ADD_NEW_TODO = 'add_new_todo'

const listReducer = (state = { currentListId: null, list: [] }, action) => {
  const { type, payload } = action
  console.log('listReducer state', state, 'action', action)
  switch (type) {
    case UPDATE_SHOWING_LIST:
      return { currentListId: payload.newListId, list: payload.newList }
    case UPDATE_TODO_ORDER:
      return { ...state, list: payload.newList }
    case ADD_NEW_TODO:
      const currentList = [...state.list].push(payload.newTodo)
      return { ...state, list: currentList }
    case TOGGLE_FINISHED:
      return { ...state, list: payload.newList }
    default:
      return state
  }
}

export default listReducer
