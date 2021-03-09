import React, { Component } from 'react'
import styles from '../styles/SideBar.module.scss'

import CreateList from './CreateList'
import TagFilter from './TagFilter'
import { initialLists, initialTags } from '../initialData'
export default class SideBar extends Component {
  state = { lists: initialLists, tags: initialTags || [] }
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.list_container}>
          <ul className={styles.list_filter}>
            {this.state.lists.map((list) => (
              <li id={list.id} className={styles.list_item}>
                {list.name}
              </li>
            ))}
          </ul>
        </div>
        <CreateList />
        <TagFilter />
      </div>
    )
  }
}
