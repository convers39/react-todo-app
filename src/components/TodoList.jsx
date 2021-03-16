import React, { Component } from 'react'
import { connect } from 'react-redux'

import AddTodo from './AddTodo'
import TodoDragDrop from './TodoDragDrop'
import TodoFilter from '../store/filters/todos'
import { fetchTodos } from '../store/actions/todos'

import styles from '../styles/style.module.scss'
class TodoList extends Component {
  componentDidMount() {
    this.props.fetchTodos()
  }

  render() {
    const { todos } = this.props
    return (
      <div className={styles.list_container}>
        <TodoDragDrop todos={todos} />
        <AddTodo />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const filter = new TodoFilter(state, 'todos')
  const { currentListId, selectedTags } = state.app
  let todos = filter.getItemsByList(currentListId)
  if (selectedTags.length) {
    const checkSubArray = (arr, sub) => sub.every((v) => arr.includes(v))
    todos = todos.filter((todo) => checkSubArray(todo.tags, selectedTags))
  }
  return { todos, currentListId }
}
const mapDispatchToProps = { fetchTodos }
const TodoListContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList)

export default TodoListContainer
