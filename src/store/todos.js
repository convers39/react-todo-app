import { action, observable, computed } from 'mobx'
import db from '../utils/index'

class Todo {
  @observable id
  @observable listId
  @observable task
  @observable tags
  @observable finished
  @observable deleted

  constructor(listId, task, date, tags) {
    this.id = `todo_${Date.now()}`
    this.task = task
    this.listId = listId
    this.tags = tags
    this.date = date || new Date().toLocaleDateString('en-CA')
    this.finished = false
    this.deleted = false
    this.created = new Date().toLocaleDateString('en-CA')
  }
}
export class TodoStore {
  @observable ids = []
  @observable items = {}

  constructor() {
    this.ids = db.get('todos')?.ids || []
    this.items = db.get('todos')?.items || {}
  }

  @computed get todos() {
    return Object.values(this.items)
  }

  @computed get finishedCount() {
    return this.todos.filter((todo) => todo.finished).length
  }

  @action.bound fetchTodos() {
    const todos = db.get('todos') || {}

    this.ids = todos.ids || []
    this.items = todos.items || {}
  }

  @action.bound addTodo = (todoData) => {
    const { listId, task, date, tags } = todoData
    const newTodo = new Todo(listId, task, date, tags)

    this.ids.push(newTodo.id)
    this.items[newTodo.id] = newTodo
    db.set('todos', { ids: this.ids, items: this.items })
  }

  @action.bound updateTodo = (id, todoData) => {
    this.items[id] = { ...this.items[id], ...todoData }
    db.set('todos', { ids: this.ids, items: this.items })
  }

  @action.bound deleteTodo = (id) => {
    this.ids = this.ids.filter((todoId) => todoId !== id)
    delete this.items[id]
    db.set('todos', { ids: this.ids, items: this.items })
  }

  @action.bound toggleFinished = (id) => {
    const { ids, items } = db.get('todos')
    this.items[id].finished = !this.items[id].finished
    db.set('todos', { ids: this.ids, items: this.items })

    console.log('toggle finished', this)
    this.ids = ids
    this.items = items
  }

  @action.bound updateTodoOrder = (sourceId, destinationId) => {
    const sourceIndex = this.ids.indexOf(sourceId)
    const destinationIndex = this.ids.indexOf(destinationId)

    let temp = this.ids[sourceIndex]
    this.ids[sourceIndex] = this.ids[destinationIndex]
    this.ids[destinationIndex] = temp
    // [ids[sourceIndex],ids[destinationIndex]] = [ids[destinationIndex],ids[sourceIndex]]
    db.set('todos', { ids: this.ids, items: this.items })
  }
}

export const TODO_STORE = 'todoStore'
