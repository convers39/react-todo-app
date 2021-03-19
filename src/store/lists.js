import { action, observable, computed } from 'mobx'
import db from '../utils/index'

export class ListStore {
  @observable ids = []
  @observable items = {}

  constructor() {
    this.ids = db.get('lists')?.ids || []
    this.items = db.get('lists')?.items || {}
  }

  @computed get lists() {
    return Object.values(this.items)
  }

  @action.bound fetchLists() {
    const lists = db.get('lists') || {}
    this.ids = lists.ids || []
    this.items = lists.items || {}
  }

  @action.bound addList = (name) => {
    const id = `list_${Date.now()}`
    const newList = {
      id,
      name,
      created: new Date().toLocaleDateString('en-CA')
    }

    this.ids.push(id)
    this.items[id] = newList
    db.set('lists', { ids: this.ids, items: this.items })
  }

  @action.bound updateList = (id, listData) => {
    this.items[id] = { ...this.items[id], ...listData }
    db.set('lists', { ids: this.ids, items: this.items })
  }

  @action.bound deleteList = (id) => {
    this.ids = this.ids.filter((listId) => listId !== id)
    delete this.items[id]
    db.set('lists', { ids: this.ids, items: this.items })
  }
}

export const LIST_STORE = 'listStore'
