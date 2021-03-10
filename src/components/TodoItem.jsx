import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toggleFinished } from '../actions/list-action'
import styles from '../styles/TodoItem.module.scss'

import Button from './Button'
import Tag from './Tag'

const mapDispatchToProps = { toggleFinished }
class TodoItem extends Component {
  state = { todo: null }

  componentDidMount() {
    this.setState({ todo: this.props.todo })
  }

  handleClick = () => {
    console.log('todo clicked')
    const newTodo = { ...this.state.todo }
    newTodo.finished = !newTodo.finished
    this.setState({ todo: newTodo })
    const todo = this.state.todo
    this.props.toggleFinished(todo.listId, todo.id, !todo.finished)
  }

  render() {
    const todo = this.state.todo
    return (
      <div className={styles.task_item}>
        {todo ? (
          <div className={styles.content}>
            <label className={styles.label} htmlFor={todo.id}>
              <input
                id={todo.id}
                className={styles.checkbox}
                type='checkbox'
                checked={todo.finished}
                onChange={this.handleClick}
              />
              <span className={styles.text}>{todo.task}</span>
            </label>
            <div className={styles.tags}>
              {todo.tags.map((tag) => (
                <Tag key={tag} tagText={tag} />
              ))}
            </div>
            <div className={styles.actions}>
              <Button buttonType={'edit'} icon={'edit'} />
              <Button buttonType={'delete'} icon={'delete'} />
            </div>
          </div>
        ) : (
          <h3>Loading...</h3>
        )}
      </div>
    )
  }
}

const TodoItemContainer = connect(null, mapDispatchToProps)(TodoItem)

export default TodoItemContainer
