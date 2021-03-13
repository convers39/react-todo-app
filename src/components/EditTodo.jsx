import React, { Component } from 'react'
import { connect } from 'react-redux'
import TodoEditForm from './TodoEditForm'
import { updateTodo } from '../store/actions/todos'
import { updateEditingTodo } from '../store/actions/app'

class EditTodo extends Component {
  handleSubmit = (todoData) => {
    const todoId = this.props.todoId
    this.props.updateTodo(todoId, todoData)
    this.props.updateEditingTodo(null)
  }

  render() {
    return (
      <TodoEditForm
        initialData={this.props.initialData}
        onSubmit={this.handleSubmit}
        toggleEdit={() => this.props.updateEditingTodo(null)}
      />
    )
  }
}

const mapDispatchToProps = { updateTodo, updateEditingTodo }

export default connect(null, mapDispatchToProps)(EditTodo)
