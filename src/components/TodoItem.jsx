import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toggleFinished, deleteTodo } from '../actions/todos'
import { updateEditingTodo } from '../actions/app'
import styles from '../styles/TodoItem.module.scss'

import Button from './Button'
import Tag from './Tag'
import EditTodo from './EditTodo'

class TodoItem extends Component {
  render() {
    const {
      todo,
      toggleFinished,
      editingTodoId,
      deleteTodo,
      updateEditingTodo
    } = this.props

    return (
      <div className={styles.task_item}>
        {editingTodoId === todo.id ? (
          <EditTodo
            todoId={todo.id}
            initialData={todo}
            toggleEdit={() => updateEditingTodo(null)}
          />
        ) : (
          <div className={styles.content}>
            <label className={styles.label} htmlFor={todo.id}>
              <input
                id={todo.id}
                className={styles.checkbox}
                type='checkbox'
                checked={todo.finished}
                onChange={() => toggleFinished(todo.id)}
              />
              <span className={styles.text}>{todo.task}</span>
            </label>
            <div className={styles.tags}>
              {todo.tags.map((tag) => (
                <Tag key={tag} tagText={tag} />
              ))}
            </div>
            <div className={styles.actions}>
              <Button
                buttonType={'edit'}
                icon={'edit'}
                onClick={() => updateEditingTodo(todo.id)}
              />
              <Button
                buttonType={'delete'}
                icon={'delete'}
                onClick={() => deleteTodo(todo.id)}
              />
            </div>
          </div>
        )}
      </div>
    )
  }
}

const mapDispatchToProps = { toggleFinished, deleteTodo, updateEditingTodo }
const mapStateToProps = (state) => ({
  editingTodoId: state.app.editingTodoId
})
export default connect(mapStateToProps, mapDispatchToProps)(TodoItem)
