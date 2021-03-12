import * as ACTION from '../constants/lists'

const initialState = {
  ids: [],
  items: {}
}

const listsReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case ACTION.FETCH_LISTS:
      return payload.lists

    case ACTION.ADD_NEW_LIST: {
      const { id, name } = action
      return {
        ...state,
        ids: [...state.ids, id],
        items: {
          ...state.items,
          [id]: {
            id,
            name,
            created: Date.now()
          }
        }
      }
    }
    // TODO: need an action in todos reducer to remove related todos
    case ACTION.REMOVE_LIST: {
      const { id } = payload
      const items = { ...state.items }
      delete items[id]
      return {
        ...state,
        ids: state.ids.filter((listId) => listId !== id),
        items
      }
    }
    default:
      return state
  }
}

export default listsReducer
