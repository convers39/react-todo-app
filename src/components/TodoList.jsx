import React, { Component } from 'react'

import { inject, observer } from 'mobx-react'
import { TODO_STORE, APP_STORE } from '../store'
import TodoFilter from '../store/filters/todos'
import AddTodo from './AddTodo'
import TodoDragDrop from './TodoDragDrop'

import styles from '../styles/style.module.scss'

@inject(APP_STORE, TODO_STORE)
@observer
class TodoList extends Component {
  componentDidMount() {
    this.props[TODO_STORE].fetchTodos()
    // const filter = new TodoFilter(stores, TODO_STORE)
    // const { currentListId, selectedTags } = stores[APP_STORE]
    // todos = filter.getItemsByList(currentListId)
    // if (selectedTags.length) {
    //   const checkSubArray = (arr, sub) => sub.every((v) => arr.includes(v))
    //   todos = todos.filter((todo) => checkSubArray(todo.tags, selectedTags))
    // }
    // return { todos, currentListId }
  }

  render() {
    console.log('todo list', this.props[TODO_STORE], this.props[APP_STORE])
    const todos = Object.values(this.props[TODO_STORE].items)
    return (
      <div className={styles.list_container}>
        <TodoDragDrop todos={todos} />
        <AddTodo />
      </div>
    )
  }
}

const TodoListContainer = inject((stores) => {
  console.log('stores', stores)
  const filter = new TodoFilter(stores, TODO_STORE)
  const { currentListId, selectedTags } = stores[APP_STORE]
  let todos = filter.getItemsByList(currentListId)

  if (selectedTags.length) {
    const checkSubArray = (arr, sub) => sub.every((v) => arr.includes(v))
    todos = todos.filter((todo) => checkSubArray(todo.tags, selectedTags))
  }
  return { todos, currentListId }
})(TodoList)

export default TodoListContainer
