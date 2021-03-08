import React, { Component } from 'react'
import styles from '../styles/TopBar.module.scss'

export default class TopBar extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.inner}>
          <div className={styles.inner__left}>top left</div>
          <div className={styles.inner__right}>top right</div>
        </div>
      </div>
    )
  }
}
