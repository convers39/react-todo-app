import { action, observable } from 'mobx'

export class AppStore {
  @observable currentListId = null
  @observable editingTodoId = null
  @observable selectedTags = []

  @action.bound selectList = (id) => {
    this.currentListId = id
    console.log('app select list', this.currentListId)
  }

  @action.bound updateEditingTodo = (id) => {
    this.editingTodoId = id
    console.log('app editing todo', this.editingTodoId)
  }

  @action.bound updateSelectedTags = (tag) => {
    let currentTags = [...this.selectedTags]
    if (currentTags.includes(tag)) {
      currentTags = currentTags.filter((t) => t !== tag)
    } else {
      currentTags.push(tag)
    }
    this.selectedTags = currentTags
  }

  @action.bound clearListFilter = () => {
    this.currentListId = null
  }

  @action.bound clearTagsFilter = () => {
    this.selectedTags = []
  }
}

export const APP_STORE = 'appStore'
