import { updateLocalStorage, getDataFromLocalStorage } from '../initialData'

const ADD_NEW_TAG = 'add_new_tag'
const FETCH_TAGS = 'fetch_tags'

export const addNewTag = () => {
  return (dispatch) => {
    dispatch({ type: ADD_NEW_TAG, payload: {} })
  }
}

export const fetchTags = () => {
  return (dispatch) => {
    const allTags = getDataFromLocalStorage('tags')
    dispatch({ type: FETCH_TAGS, payload: { allTags } })
  }
}
