import React, { Component } from 'react'
import { connect } from 'react-redux'
import styles from '../styles/AddTodo.module.scss'
import Button from './Button'
import SelectDate from './SelectDate'
import SelectList from './SelectList'
import SelectTag from './SelectTag'

import { addNewTodo } from '../actions/list-action'
class AddTodo extends Component {
  state = { listId: null, task: '', date: null, tags: [] }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log('handle submit', this.state)
    this.props.addNewTodo(this.state)
  }
  handleInputChange = (e) => {
    console.log(e.target.value)
    this.setState((state) => ({ ...state, task: e.target.value }))
  }
  handleListChange = (option) => {
    console.log('add todo list change', option)
    const listId = +option.value
    this.setState((state) => ({ ...state, listId }))
  }
  handleTagChange = (options) => {
    console.log('tag change', options)
    const tags = options.map((obj) => obj.label)
    this.setState((state) => ({ ...state, tags }))
  }
  handleDateChange = (date) => {
    console.log('date change', date.toLocaleDateString('en-CA'))
    this.setState((state) => ({
      ...state,
      date: date.toLocaleDateString('en-CA')
    }))
  }
  render() {
    return (
      <form className={styles.task_editor} onSubmit={this.handleSubmit}>
        <div className={styles.content}>
          <div className={styles.textarea}>
            <input
              className={styles.input}
              type='text'
              placeholder='new task'
              onChange={this.handleInputChange}
            />
          </div>
          <div className={styles.extras}>
            <SelectDate onChange={this.handleDateChange} />
            <SelectList onChange={this.handleListChange} />
            <SelectTag onChange={this.handleTagChange} />
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

const mapDispatchToProps = { addNewTodo }
export default connect(null, mapDispatchToProps)(AddTodo)
