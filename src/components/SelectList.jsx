import React, { Component } from 'react'
import { connect } from 'react-redux'
import Select from 'react-select'
import styles from '../styles/AddTodo.module.scss'
class SelectList extends Component {
  render() {
    let { lists, defaultList } = this.props
    const options = lists.map((list) => ({
      value: list.id,
      label: list.name
    }))
    // in edit mode retrieve default list
    const defaultIndex =
      defaultList && lists.findIndex((list) => list.id === defaultList)
    // const defaultValue =
    //   defaultList &&
    //   lists
    //     .filter((list) => list.id === defaultList)
    //     .map((list) => ({ value: list.id, label: list.name }))[0]

    return (
      <>
        <Select
          className={styles.list_selector}
          classNamePrefix='select'
          placeholder='List'
          defaultValue={options[defaultIndex] || ''}
          isClearable={true}
          isSearchable={true}
          onChange={this.props.onChange}
          name='list-selector'
          options={options}
          theme={(theme) => ({
            ...theme,
            colors: {
              ...theme.colors,
              primary25: 'lightblue',
              primary: 'darkgray'
            }
          })}
        />
      </>
    )
  }
}
const mapStateToProps = (state) => ({
  lists: Object.values(state.lists.items)
})
export default connect(mapStateToProps)(SelectList)
