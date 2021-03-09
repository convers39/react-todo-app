import React, { Component } from 'react'
import styles from '../styles/Button.module.scss'
import Icon from './Icon'

export default class Button extends Component {
  render() {
    let { buttonType, icon, text } = this.props
    let className = ''
    switch (buttonType) {
      case 'delete':
        className = styles.delete
        break
      case 'edit':
        className = styles.edit
        break
      case 'sort':
        className = styles.sort
        break
      case 'add':
        className = styles.add
        break
      case 'create':
        className = styles.create
        break
      case 'cancel':
        className = styles.cancel
        break
      default:
        break
    }
    return (
      <button className={`${styles.btn} ${className}`}>
        <Icon icon={icon} />
        {text || ''}
      </button>
    )
  }
}
