import React, { Component } from 'react'
import styles from '../styles/TodoItem.module.scss'

export default class TodoItem extends Component {
  render() {
    return (
      <li className={styles.task_item}>
        <div className={styles.content}>
          <input type='checkbox' />
          <div className={styles.details}>
            <div className={styles.text}>task content</div>
            <div className={styles.tags}>tags</div>
          </div>
          <div className={styles.actions}>
            <button>edit</button>
            <button>Delete</button>
          </div>
        </div>
      </li>
    )
  }
}
