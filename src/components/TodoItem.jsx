import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toggleFinished, deleteTodo } from '../actions/list-action'
import styles from '../styles/TodoItem.module.scss'

import Button from './Button'
import Tag from './Tag'
import EditTodo from './EditTodo'

class TodoItem extends Component {
  state = { editing: false }

  toggleEdit = () => {
    this.setState((state) => ({ editing: !state.editing }))
  }

  handleDelete = () => {
    const todo = { ...this.props.todo }
    this.props.deleteTodo(todo.listId, todo.id)
  }

  handleFinished = () => {
    const todo = { ...this.props.todo }
    this.props.toggleFinished(todo.listId, todo.id, !todo.finished)
  }

  render() {
    const todo = this.props.todo
    return (
      <div className={styles.task_item}>
        {this.state.editing ? (
          <EditTodo
            todoId={todo.id}
            initialData={todo}
            toggleEdit={this.toggleEdit}
          />
        ) : (
          <div className={styles.content}>
            <label className={styles.label} htmlFor={todo.id}>
              <input
                id={todo.id}
                className={styles.checkbox}
                type='checkbox'
                checked={todo.finished}
                onChange={this.handleFinished}
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

const mapDispatchToProps = { toggleFinished, deleteTodo }
const mapStateToProps = (state) => ({
  currentTasks: state.currentList.list
})
export default connect(mapStateToProps, mapDispatchToProps)(TodoItem)
