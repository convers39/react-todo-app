import db from '../utils/index'
import * as ACTION from '../constants/lists'

export const fetchLists = () => {
  return (dispatch) => {
    const lists = db.get('lists')
    dispatch({ type: ACTION.FETCH_LISTS, payload: { lists } })
  }
}

export const addList = (name) => {
  return (dispatch) => {
    // update localStorage
    const { ids, items } = db.get('lists')
    const id = 'list_' + Date.now()
    ids.push(id)
    items[id] = { id, name: name, created: new Date() }
    db.set('lists', { ids, items })

    dispatch({ type: ACTION.ADD_LIST, payload: { id, name } })
  }
}

export const removeList = (id) => {
  return (dispatch) => {
    const { ids, items } = db.get('lists')
    ids.filter((listId) => listId !== id)
    delete items[id]
    db.set('lists', { ids, items })
    dispatch({ type: ACTION.REMOVE_LIST, payload: { id } })
  }
}
