import React, { Component } from 'react'
import { connect } from 'react-redux'
import TodoEditForm from './TodoEditForm'
import { updateTodo } from '../actions/todos'
import { updateEditingTodo } from '../actions/app'

class EditTodo extends Component {
  handleSubmit = (todoData) => {
    console.log('handle submit', todoData)
    const todoId = this.props.todoId
    this.props.updateTodo(todoId, todoData)
    this.props.updateEditingTodo(null)
  }

  render() {
    return (
      <TodoEditForm
        initialData={this.props.initialData}
        onSubmit={this.handleSubmit}
        toggleEdit={this.props.toggleEdit}
      />
    )
  }
}

const mapDispatchToProps = { updateTodo, updateEditingTodo }
export default connect(null, mapDispatchToProps)(EditTodo)
