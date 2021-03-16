import { action, observable } from 'mobx'
import db from '../utils/index'

export class ListStore {
  @observable ids = []
  @observable items = {}

  @action.bound fetchLists() {
    const lists = db.get('lists')
    this.ids = lists.ids
    this.items = lists.items
  }

  @action.bound addList(name) {
    const id = `list_${Date.now()}`
    const newList = {
      id,
      name,
      created: new Date().toLocaleDateString('en-CA')
    }

    // update DB
    const { ids, items } = db.get('lists')
    ids.push(id)
    items[id] = newList
    db.set('lists', { ids, items })
    this.ids = ids
    this.items = items
  }

  @action.bound updateList(id, listData) {
    const { ids, items } = db.get('lists')
    items[id] = { ...items[id], ...listData }
    db.set('lists', { ids, items })
    this.ids = ids
    this.items = items
  }

  @action.bound deleteList(id) {
    // update DB
    let { ids, items } = db.get('lists')
    ids = ids.filter((listId) => listId !== id)
    delete items[id]
    db.set('lists', { ids, items })
    this.ids = ids
    this.items = items
  }
}

export const LIST_STORE = 'listStore'
