import { action, observable, computed } from 'mobx'
import db from '../utils/index'

export class TodoStore {
  // @observable todos = { ids: [], items: {} }
  @observable ids = []
  @observable items = {}

  @computed get finishedCount() {
    return Object.values(this.items).filter((todo) => todo.finished).length
  }

  // @computed get ids() {
  //   return this.todos.ids
  // }

  // @computed get items() {
  //   return this.todos.items
  // }

  @action.bound fetchTodos() {
    const todos = db.get('todos')
    // this.todos = todos
    this.ids = todos.ids
    this.items = todos.items
  }

  @action.bound addTodo(todoData) {
    const { listId, task, date, tags } = todoData
    const id = `todo_${Date.now()}`
    const newTodo = {
      id,
      task,
      listId,
      tags,
      date: date || new Date().toLocaleDateString('en-CA'),
      finished: false,
      deleted: false,
      created: new Date().toLocaleDateString('en-CA')
    }

    // update DB
    const { ids, items } = db.get('todos')
    ids.push(id)
    items[id] = newTodo
    db.set('todos', { ids, items })
    this.ids = ids
    this.items = items
    // this.todos = { ids, items }
  }

  @action.bound updateTodo(id, todoData) {
    const { ids, items } = db.get('todos')
    items[id] = { ...items[id], ...todoData }
    db.set('todos', { ids, items })
    // this.todos = { ids, items }

    this.ids = ids
    this.items = items
  }

  @action.bound deleteTodo(id) {
    // update DB
    let { ids, items } = db.get('todos')
    ids = ids.filter((todoId) => todoId !== id)
    delete items[id]
    db.set('todos', { ids, items })
    // this.todos = { ids, items }

    this.ids = ids
    this.items = items
  }

  @action.bound toggleTodo(id) {
    // update DB
    const { ids, items } = db.get('todos')
    items[id].finished = !items[id].finished
    db.set('todos', { ids, items })
    // this.todos = { ids, items }

    this.ids = ids
    this.items = items
  }

  @action.bound updateTodoOrder(sourceId, destinationId) {
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
