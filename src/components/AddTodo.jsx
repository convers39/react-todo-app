import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../store/actions/todos'
import { updateEditingTodo } from '../store/actions/app'

import TodoEditForm from './TodoEditForm'
import Button from './Button'

import styles from '../styles/AddTodo.module.scss'

class AddTodo extends Component {
  handleSubmit = (todoData) => {
    this.props.addTodo(todoData)
    this.props.updateEditingTodo(null)
  }

  render() {
    const { editingTodoId, updateEditingTodo } = this.props
    return (
      <>
        {editingTodoId === 'newTodo' ? (
          <div className={styles.add_todo_container}>
            <TodoEditForm
              onSubmit={this.handleSubmit}
              toggleEdit={() => updateEditingTodo(null)}
            />
          </div>
        ) : (
          <Button
            buttonType={'expand'}
            text={'New Todo'}
            onClick={() => updateEditingTodo('newTodo')}
          >
            Add Todo
          </Button>
        )}
      </>
    )
  }
}
const mapStateToProps = (state) => ({
  editingTodoId: state.app.editingTodoId
})
const mapDispatchToProps = { addTodo, updateEditingTodo }
export default connect(mapStateToProps, mapDispatchToProps)(AddTodo)
