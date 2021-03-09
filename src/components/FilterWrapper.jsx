import React, { Component } from 'react'
import styles from '../styles/SideBar.module.scss'

export default class FilterWrapper extends Component {
  render() {
    const { id, children, filterName } = this.props
    return (
      <div className={styles.filter_container}>
        <div class={styles.tab}>
          <input className={styles.checkbox} type='checkbox' id={id} />
          <label class={styles.tab_label} for={id}>
            &#43;<span>{filterName}</span>
          </label>
          <div className={styles.tab_content}>{children}</div>
        </div>
      </div>
    )
  }
}
