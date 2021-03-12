import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toggleFinished, deleteTodo } from '../actions/todos'
import { updateEditingTodo } from '../actions/app'
import styles from '../styles/TodoItem.module.scss'

import Button from './Button'
import Tag from './Tag'
import EditTodo from './EditTodo'

class TodoItem extends Component {
  handleClick = () => {
    this.props.deleteTodo(this.props.todo.id)
  }
  render() {
    const {
      todo,
      toggleFinished,
      editingTodoId,
      updateEditingTodo
    } = this.props

    return (
      <div className={styles.task_item}>
        {editingTodoId === todo.id ? (
          <EditTodo
            todoId={todo.id}
            initialData={todo}
            toggleEdit={() => updateEditingTodo(todo.id)}
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
                onClick={this.toggleEdit}
              />
              <Button
                buttonType={'delete'}
                icon={'delete'}
                onClick={this.handleDelete}
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
  editingTodoId: state.app.editingTodo
})
export default connect(mapStateToProps, mapDispatchToProps)(TodoItem)
