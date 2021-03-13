import * as ACTION from '../constants/tags'

const initialState = {
  ids: [],
  items: {}
}

const tagsReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case ACTION.FETCH_TAGS:
      // console.log('tags in reducer', payload)
      return payload.tags

    case ACTION.ADD_TAG: {
      const { id, name } = payload
      return {
        ...state,
        ids: [...state.ids, id],
        items: {
          ...state.items,
          [id]: {
            id,
            name,
            created: new Date().toLocaleDateString('en-CA')
          }
        }
      }
    }
    case ACTION.DELETE_TAG: {
      const { id } = payload
      const items = { ...state.items }
      delete items[id]
      return {
        ...state,
        ids: state.ids.filter((tagId) => tagId !== id),
        items
      }
    }

    default:
      return state
  }
}

export default tagsReducer
