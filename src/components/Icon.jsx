import React, { Component } from 'react'

export default class Icon extends Component {
  render() {
    let icon = this.props.icon

    switch (icon) {
      case 'delete':
        return <i class='far fa-trash-alt'></i>
      case 'edit':
        return <i class='far fa-edit'></i>
      case 'sort':
        return <i class='fas fa-sort-amount-down'></i>
      case 'add':
        return <i class='fas fa-plus'></i>
      default:
        return <span></span>
    }
  }
}
