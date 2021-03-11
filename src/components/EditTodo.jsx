import React, { Component } from 'react'
import { connect } from 'react-redux'
import TodoEditForm from './TodoEditForm'
import { editTodo } from '../actions/list-action'

class EditTodo extends Component {
  handleSubmit = (todoData) => {
    console.log('handle submit', todoData)
    const todoId = this.props.todoId
    this.props.editTodo(todoId, todoData)
    this.props.toggleEdit()
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

const mapDispatchToProps = { editTodo }
export default connect(null, mapDispatchToProps)(EditTodo)
