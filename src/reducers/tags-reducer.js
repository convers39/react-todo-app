import { getDataFromLocalStorage } from '../initialData'

const ADD_NEW_TAG = 'add_new_tag'
const FETCH_TAGS = 'fetch_tags'

const initialTags = getDataFromLocalStorage('tags')

const tagsReducer = (state = [], action) => {
  const { type, payload } = action
  switch (type) {
    case FETCH_TAGS:
      return payload.allTags
    case ADD_NEW_TAG:
      return []
    default:
      return state
  }
}

export default tagsReducer
