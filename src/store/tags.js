import { action, observable, computed } from 'mobx'
import db from '../utils/index'

export class TagStore {
  @observable ids = []
  @observable items = {}

  constructor() {
    this.ids = db.get('tags')?.ids || []
    this.items = db.get('tags')?.items || {}
  }

  @computed get tags() {
    return Object.values(this.items)
  }

  @action.bound fetchTags() {
    const tags = db.get('tags') || {}

    this.ids = tags.ids || []
    this.items = tags.items || {}
  }

  @action.bound addTag(name) {
    const id = `tag_${Date.now()}`
    const newTag = {
      id,
      name,
      created: new Date().toLocaleDateString('en-CA')
    }

    this.ids.push(id)
    this.items[id] = newTag
    db.set('tags', { ids: this.ids, items: this.items })
  }

  @action.bound updateTag(id, tagData) {
    this.items[id] = { ...this.items[id], ...tagData }
    db.set('tags', { ids: this.ids, items: this.items })
  }

  @action.bound deleteTag(id) {
    this.ids = this.ids.filter((tagId) => tagId !== id)
    delete this.items[id]
    db.set('tags', { ids: this.ids, items: this.items })
  }
}

export const TAG_STORE = 'tagStore'
