import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { TODO_STORE, APP_STORE } from '../store'

import Button from './Button'
import Tag from './Tag'
import styles from '../styles/TodoItem.module.scss'

@inject(APP_STORE, TODO_STORE)
@observer
class DisplayTodo extends Component {
  render() {
    console.log('display todo', this.props[TODO_STORE])
    const toggleFinished = this.props[TODO_STORE].toggleFinished
    const deleteTodo = this.props[TODO_STORE].deleteTodo
    const updateEditingTodo = this.props[APP_STORE].updateEditingTodo
    const { todo } = this.props

    return (
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
            <Tag key={tag} tagName={tag} />
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
    )
  }
}

export default DisplayTodo
