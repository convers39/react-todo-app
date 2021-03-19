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
  // @observable todos = { ids: [], items: {} }
  @observable ids = []
  @observable items = {}

  constructor() {
    this.ids = db.get('todos').ids
    this.items = db.get('todos').items
  }

  @computed get todos() {
    return Object.values(this.items)
  }

  @computed get finishedCount() {
    return this.todos.filter((todo) => todo.finished).length
  }

  @action.bound fetchTodos() {
    const todos = db.get('todos')
    // this.todos = todos
    this.ids = todos.ids
    this.items = todos.items
  }

  @action.bound addTodo = (todoData) => {
    const { listId, task, date, tags } = todoData
    const newTodo = new Todo(listId, task, date, tags)

    // update DB
    const { ids, items } = db.get('todos')
    ids.push(newTodo.id)
    items[newTodo.id] = newTodo
    db.set('todos', { ids, items })
    this.ids = ids
    this.items = items
    // this.todos = { ids, items }
  }

  @action.bound updateTodo = (id, todoData) => {
    const { ids, items } = db.get('todos')
    items[id] = { ...items[id], ...todoData }
    db.set('todos', { ids, items })
    // this.todos = { ids, items }

    this.ids = ids
    this.items = items
  }

  @action.bound deleteTodo = (id) => {
    // update DB
    let { ids, items } = db.get('todos')
    ids = ids.filter((todoId) => todoId !== id)
    delete items[id]
    db.set('todos', { ids, items })
    // this.todos = { ids, items }

    this.ids = ids
    this.items = items
  }

  @action.bound toggleFinished = (id) => {
    // update DB
    const { ids, items } = db.get('todos')
    items[id].finished = !items[id].finished
    db.set('todos', { ids, items })
    // this.todos = { ids, items }
    console.log('toggle finished', this)
    this.ids = ids
    this.items = items
  }

  @action.bound updateTodoOrder = (sourceId, destinationId) => {
    const { ids, items } = db.get('todos')
    const sourceIndex = ids.indexOf(sourceId)
    const destinationIndex = ids.indexOf(destinationId)

    let temp = ids[sourceIndex]
    ids[sourceIndex] = ids[destinationIndex]
    ids[destinationIndex] = temp
    // [ids[sourceIndex],ids[destinationIndex]] = [ids[destinationIndex],ids[sourceIndex]]
    db.set('todos', { ids, items })
    // this.todos = { ids, items }

    this.ids = ids
    this.items = items
  }
}

export const TODO_STORE = 'todoStore'
