import React, { Component } from 'react'
import { connect } from 'react-redux'
import styles from '../styles/SideBar.module.scss'
import SideBarListContainer from './SideBarList'

class ListFilter extends Component {
  render() {
    const lists = this.props.allLists
    return (
      <div className={styles.list_container}>
        <ul className={styles.list_filter}>
          {lists.map((list) => (
            <SideBarListContainer key={list.id} list={list} />
          ))}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  allLists: state.allLists.allLists
})

const ListFilterContainer = connect(mapStateToProps)(ListFilter)

export default ListFilterContainer
