import db from '../utils/index'
import * as ACTION from '../constants/tags'

export const addTag = (name) => ({
  type: ACTION.ADD_TAG,
  payload: { name }
})

export const deleteTag = (id) => ({
  type: ACTION.DELETE_TAG,
  payload: { id }
})

export const fetchTags = () => {
  return (dispatch) => {
    const tags = db.get('tags')
    dispatch({ type: ACTION.FETCH_TAGS, payload: { tags } })
  }
}
