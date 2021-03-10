import React, { Component } from 'react'
import { connect } from 'react-redux'
import styles from '../styles/SideBar.module.scss'
import { updateCurrentList } from '../actions/list-action'
import { removeList } from '../actions/lists-action'

class SideBarList extends Component {
  handleClick = (e) => {
    // dispatch method to reducer and update current showing list id
    this.props.updateCurrentList(+e.target.id)
  }

  handleRemove = (listId) => {
    this.props.removeList(listId)
  }
  render() {
    const { list } = this.props
    return (
      <li
        className={`${
          this.props.currentListId === list.id ? styles.active : ''
        } ${styles.list_wrapper}`}
      >
        <div
          id={list.id}
          className={`${styles.list_item}`}
          onClick={this.handleClick}
        >
          {list.name}
        </div>
        <button
          className={styles.list_remove_btn}
          onClick={() => this.handleRemove(list.id)}
        >
          &times;
        </button>
      </li>
    )
  }
}

const mapStateToProps = (state) => ({
  currentListId: state.currentList.currentListId
})
const mapDispatchToProps = { updateCurrentList, removeList }
const SideBarListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SideBarList)

export default SideBarListContainer
