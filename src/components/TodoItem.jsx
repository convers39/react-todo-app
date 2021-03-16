import React, { Component } from 'react'
import { connect } from 'react-redux'
import styles from '../styles/TodoItem.module.scss'

import EditTodo from './EditTodo'
import DisplayTodo from './DisplayTodo'

class TodoItem extends Component {
  render() {
    const { todo, editingTodoId } = this.props

    return (
      <div className={styles.task_item}>
        {editingTodoId === todo.id ? (
          <EditTodo todoId={todo.id} initialData={todo} />
        ) : (
          <DisplayTodo todo={todo} />
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({ editingTodoId: state.app.editingTodoId })

export default connect(mapStateToProps)(TodoItem)
