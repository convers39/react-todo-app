import React, { Component } from 'react'
import { connect } from 'react-redux'
import styles from '../styles/SideBar.module.scss'
import SideBarList from './SideBarList'
import FilterClear from './FilterClear'
import { fetchLists } from '../store/actions/lists'

class ListFilter extends Component {
  componentDidMount() {
    this.props.fetchLists()
  }
  render() {
    const lists = this.props.lists
    console.log('lists filter', lists)
    return (
      <div className={styles.list_container}>
        <FilterClear clearType={'lists'} />
        {lists ? (
          <ul className={styles.list_filter}>
            {lists.map((list) => (
              <SideBarList key={list.id} list={list} />
            ))}
          </ul>
        ) : (
          <h3>Loading...</h3>
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  lists: Object.values(state.lists.items)
})
const mapDispatchToProps = { fetchLists }

export default connect(mapStateToProps, mapDispatchToProps)(ListFilter)
