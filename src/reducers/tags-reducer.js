import * as ACTION from '../constants/tags-constant'

const tagsReducer = (state = [], action) => {
  const { type, payload } = action
  switch (type) {
    case ACTION.FETCH_TAGS:
      return payload.allTags
    case ACTION.ADD_NEW_TAG:
      return []
    default:
      return state
  }
}

export default tagsReducer
