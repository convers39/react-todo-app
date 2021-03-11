import * as ACTION from '../constants/list-constant'

const listReducer = (state = { currentListId: null, list: [] }, action) => {
  const { type, payload } = action
  console.log('listReducer state', state, 'action', action)
  switch (type) {
    case ACTION.UPDATE_SHOWING_LIST:
      return { currentListId: payload.newListId, list: payload.newList }
    case ACTION.UPDATE_TODO_ORDER:
      return { ...state, list: payload.newList }
    case ACTION.ADD_NEW_TODO:
      const currentList = [...state.list]
      currentList.push(payload.newTodo)
      return { ...state, list: currentList }
    case ACTION.EDIT_TODO:
      return { ...state, list: payload.newList }
    case ACTION.MOVE_TODO:
      return { ...state, list: payload.newList }
    case ACTION.DELETE_TODO:
      return { ...state, list: payload.newList }
    case ACTION.TOGGLE_FINISHED:
      return { ...state, list: payload.newList }
    default:
      return state
  }
}

export default listReducer
