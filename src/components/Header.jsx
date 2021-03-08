import React, { Component } from 'react'
import styles from '../styles/Header.module.scss'

export default class Header extends Component {
  render() {
    return (
      <header className={styles.header}>
        <div className={styles.content}>
          <h2>
            <span>Welcome</span>
            <small>{new Date().toDateString()}</small>
          </h2>
          <div>
            <button>Sort</button>
          </div>
        </div>
      </header>
    )
  }
}
