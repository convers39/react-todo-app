import { action, observable, computed } from 'mobx'

export class AppStore {
  @observable appState = {
    currentListId: null,
    editingTodoId: null,
    selectedTags: []
  }

  @computed get currentListId() {
    return this.appState.currentListId
  }

  @computed get editingTodoId() {
    return this.appState.editingTodoId
  }

  @computed get selectedTags() {
    return this.appState.selectedTags
  }

  @action.bound selectList = (id) => {
    this.appState.currentListId = id
  }

  @action.bound updateEditingTodo = (id) => {
    this.appState.editingTodoId = id
  }

  @action.bound updateSelectedTags = (tag) => {
    let currentTags = [...this.appState.selectedTags]
    if (currentTags.includes(tag)) {
      currentTags = currentTags.filter((t) => t !== tag)
    } else {
      currentTags.push(tag)
    }
    this.appState.selectedTags = currentTags
  }

  @action.bound clearListFilter = () => {
    this.appState.currentListId = null
  }

  @action.bound clearTagsFilter = () => {
    this.appState.selectedTags = []
  }
}

export const APP_STORE = 'appStore'
