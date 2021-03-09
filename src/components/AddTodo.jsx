import React, { Component } from 'react'
import styles from '../styles/AddTodo.module.scss'
import Button from './Button'
import SelectDate from './SelectDate'
import SelectList from './SelectList'
import SelectTag from './SelectTag'

const initialLists = [
  { id: 1, name: 'list 1', tasks: [] },
  { id: 2, name: 'list 2', tasks: [] }
]
export default class AddTodo extends Component {
  render() {
    return (
      <form className={styles.task_editor}>
        <div className={styles.content}>
          <div className={styles.textarea}>
            <input
              className={styles.input}
              type='text'
              placeholder='new task'
            />
          </div>
          <div className={styles.extras}>
            <SelectDate />
            <SelectList lists={initialLists} />
            <SelectTag />
          </div>
        </div>
        <div className={styles.actions}>
          <Button buttonType={'add'} icon={'add'} text={'Add'} />
          <Button buttonType={'cancel'} text={'cancel'} />
        </div>
      </form>
    )
  }
}
