import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions/todos'
import { updateEditingTodo } from '../actions/app'

import TodoEditForm from './TodoEditForm'
import Button from './Button'

class AddTodo extends Component {
  handleSubmit = (todoData) => {
    console.log('handle submit', todoData)
    this.props.addTodo(todoData)
    this.props.updateEditingTodo(null)
  }

  render() {
    const { editingTodoId, updateEditingTodo } = this.props
    return (
      <>
        {editingTodoId === 'newTodo' ? (
          <TodoEditForm
            onSubmit={this.handleSubmit}
            toggleEdit={() => updateEditingTodo(null)}
          />
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
