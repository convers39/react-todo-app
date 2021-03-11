import { getDataFromLocalStorage } from '../initialData'
import * as ACTION from '../constants/tags-constant'

export const addNewTag = () => {
  return (dispatch) => {
    dispatch({ type: ACTION.ADD_NEW_TAG, payload: {} })
  }
}

export const fetchTags = () => {
  return (dispatch) => {
    const allTags = getDataFromLocalStorage('tags')
    dispatch({ type: ACTION.FETCH_TAGS, payload: { allTags } })
  }
}
