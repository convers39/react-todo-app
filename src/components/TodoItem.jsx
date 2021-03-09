import React, { Component } from 'react'
import styles from '../styles/TodoItem.module.scss'

import Button from './Button'
import Tag from './Tag'

export default class TodoItem extends Component {
  state = { finished: this.props.todo.finished }
  handleClick = () => {
    this.setState((state) => ({ finished: !state.finished }))
  }
  render() {
    const { todo } = this.props
    return (
      <div className={styles.task_item}>
        <div className={styles.content}>
          <label className={styles.label} htmlFor={todo.id}>
            <input
              id={todo.id}
              className={styles.checkbox}
              type='checkbox'
              checked={this.finished}
            />
            <span className={styles.text}>{todo.task}</span>
          </label>
          <div className={styles.tags}>
            {todo.tags.map((tag) => (
              <Tag tagText={tag} />
            ))}
          </div>
          <div className={styles.actions}>
            <Button buttonType={'edit'} icon={'edit'} />
            <Button buttonType={'delete'} icon={'delete'} />
          </div>
        </div>
      </div>
    )
  }
}
