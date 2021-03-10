import React, { Component } from 'react'

export default class Icon extends Component {
  render() {
    let icon = this.props.icon

    switch (icon) {
      case 'delete':
        return <i className='far fa-trash-alt'></i>
      case 'edit':
        return <i className='far fa-edit'></i>
      case 'sort':
        return <i className='fas fa-sort-amount-down'></i>
      case 'add':
        return <i className='fas fa-plus'></i>
      default:
        return <span></span>
    }
  }
}
