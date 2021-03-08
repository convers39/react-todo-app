import React, { Component } from 'react'
import styles from '../styles/TodoList.module.scss'
import TodoItem from './TodoItem'

export default class TodoList extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.content}>
          <ul className={styles.todo_items}>
            <TodoItem />
            <TodoItem />
            <TodoItem />
          </ul>
        </div>
      </div>
    )
  }
}
