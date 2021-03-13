import React, { Component } from 'react'
import { connect } from 'react-redux'
import styles from '../styles/SideBar.module.scss'
import { deleteList } from '../actions/lists'
import { selectList } from '../actions/app'

class SideBarList extends Component {
  render() {
    const { list, deleteList, selectList } = this.props
    return (
      <li
        className={`${
          this.props.currentListId === list.id ? styles.active : ''
        } ${styles.list_wrapper}`}
      >
        <div
          id={list.id}
          className={`${styles.list_item}`}
          onClick={() => selectList(list.id)}
        >
          {list.name}
        </div>
        <button
          className={styles.list_remove_btn}
          onClick={() => deleteList(list.id)}
        >
          &times;
        </button>
      </li>
    )
  }
}

const mapStateToProps = (state) => ({
  currentListId: state.app.currentListId
})
const mapDispatchToProps = { selectList, deleteList }
const SideBarListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SideBarList)

export default SideBarListContainer
