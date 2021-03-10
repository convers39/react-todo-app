import React, { Component } from 'react'
import styles from '../styles/SideBar.module.scss'

import CreateListContainer from './CreateList'
import TagFilter from './TagFilter'
import ListFilterContainer from './ListFilter'

export default class SideBar extends Component {
  render() {
    return (
      <div className={styles.container}>
        <ListFilterContainer />
        <CreateListContainer />
        <TagFilter />
      </div>
    )
  }
}
