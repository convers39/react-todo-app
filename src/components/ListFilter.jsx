import React, { Component } from 'react'
import { connect } from 'react-redux'
import styles from '../styles/SideBar.module.scss'
import SideBarList from './SideBarList'
import { fetchLists } from '../actions/lists-action'

class ListFilter extends Component {
  componentDidMount() {
    this.props.fetchLists()
  }
  render() {
    const lists = this.props.allLists
    return (
      <div className={styles.list_container}>
        <ul className={styles.list_filter}>
          {lists.map((list) => (
            <SideBarList key={list.id} list={list} />
          ))}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  allLists: state.allLists
})
const mapDispatchToProps = { fetchLists }

export default connect(mapStateToProps, mapDispatchToProps)(ListFilter)
