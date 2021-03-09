import React, { Component } from 'react'
import styles from '../styles/style.module.scss'

export default class Tag extends Component {
  render() {
    const { tagText } = this.props
    return (
      <div className={styles.tag_container}>
        <span>#{tagText}</span>
      </div>
    )
  }
}
