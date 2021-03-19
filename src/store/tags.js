import { action, observable, computed } from 'mobx'
import db from '../utils/index'

export class TagStore {
  @observable ids = []
  @observable items = {}

  constructor() {
    this.ids = db.get('tags').ids
    this.items = db.get('tags').items
  }

  @computed get tags() {
    return Object.values(this.items)
  }

  @action.bound fetchTags() {
    const tags = db.get('tags')

    this.ids = tags.ids
    this.items = tags.items
  }

  @action.bound addTag(name) {
    const id = `tag_${Date.now()}`
    const newTag = {
      id,
      name,
      created: new Date().toLocaleDateString('en-CA')
    }

    // update DB
    const { ids, items } = db.get('tags')
    ids.push(id)
    items[id] = newTag
    db.set('tags', { ids, items })

    this.ids = ids
    this.items = items
  }

  @action.bound updateTag(id, tagData) {
    const { ids, items } = db.get('tags')
    items[id] = { ...items[id], ...tagData }
    db.set('tags', { ids, items })

    this.ids = ids
    this.items = items
  }

  @action.bound deleteTag(id) {
    // update DB
    let { ids, items } = db.get('tags')
    ids = ids.filter((tagId) => tagId !== id)
    delete items[id]
    db.set('tags', { ids, items })
    this.ids = ids
    this.items = items
  }
}

export const TAG_STORE = 'tagStore'
