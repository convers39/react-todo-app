import * as ACTION from '../constants/tags'

const initialState = {
  ids: [],
  items: {}
}

const tagsReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case ACTION.FETCH_TAGS:
      return payload.tags

    case ACTION.ADD_TAG:
      return []
    default:
      return state
  }
}

export default tagsReducer
