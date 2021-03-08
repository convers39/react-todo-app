import React, { Component } from 'react'
import styles from '../styles/SideBar.module.scss'

export default class SideBar extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.list_container}>
          <ul className={styles.list_filter}>
            <li className={styles.list_filter__item}>1</li>
            <li className={styles.list_filter__item}>2</li>
            <li className={styles.list_filter__item}>3</li>
          </ul>
        </div>
        <div className='new-list'>
          <a href='#'>Create new list</a>
        </div>
        <div className='tag-filter-container'>
          <ul className='tag-filter'>
            <li className='tag-filter__item'>#tag1</li>
            <li className='tag-filter__item'>#tag2</li>
            <li className='tag-filter__item'>#tag3</li>
          </ul>
        </div>
      </div>
    )
  }
}
