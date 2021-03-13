import db from '../utils/index'
import * as ACTION from '../constants/tags'

export const addTag = (name) => {
  return (dispatch) => {
    // update localStorage
    const { ids, items } = db.get('tags')
    const id = 'tag_' + Date.now()
    ids.push(id)
    items[id] = {
      id,
      name: name,
      created: new Date().toLocaleDateString('en-CA')
    }
    db.set('tags', { ids, items })

    dispatch({ type: ACTION.ADD_TAG, payload: { id, name } })
  }
}

export const deleteTag = (id) => {
  return (dispatch) => {
    const { ids, items } = db.get('tags')
    ids.filter((listId) => listId !== id)
    delete items[id]
    db.set('tags', { ids, items })
    dispatch({ type: ACTION.DELETE_TAG, payload: { id } })
  }
}

export const fetchTags = () => {
  return (dispatch) => {
    const tags = db.get('tags')
    dispatch({ type: ACTION.FETCH_TAGS, payload: { tags } })
  }
}
