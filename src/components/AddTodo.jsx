import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addNewTodo } from '../actions/list-action'
import TodoEditForm from './TodoEditForm'
import Button from './Button'

class AddTodo extends Component {
  state = { editing: false }

  handleSubmit = (todoData) => {
    console.log('handle submit', todoData)
    this.props.addNewTodo(todoData)
    this.toggleEdit()
  }
  toggleEdit = () => {
    this.setState(
      (state) => ({ editing: !state.editing }),
      console.log('toggle edit', this.state)
    )
  }

  render() {
    return (
      <>
        {this.state.editing ? (
          <TodoEditForm
            onSubmit={this.handleSubmit}
            toggleEdit={this.toggleEdit}
          />
        ) : (
          <Button
            buttonType={'expand'}
            text={'New Todo'}
            onClick={this.toggleEdit}
          >
            Add Todo
          </Button>
        )}
      </>
    )
  }
}

const mapDispatchToProps = { addNewTodo }
export default connect(null, mapDispatchToProps)(AddTodo)
