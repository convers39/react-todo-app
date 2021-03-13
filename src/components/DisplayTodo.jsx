import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toggleFinished, deleteTodo } from '../store/actions/todos'
import { updateEditingTodo } from '../store/actions/app'
import styles from '../styles/TodoItem.module.scss'

import Button from './Button'
import Tag from './Tag'

class DisplayTodo extends Component {
  render() {
    const { todo, toggleFinished, deleteTodo, updateEditingTodo } = this.props

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

const mapDispatchToProps = { toggleFinished, deleteTodo, updateEditingTodo }

export default connect(null, mapDispatchToProps)(DisplayTodo)
