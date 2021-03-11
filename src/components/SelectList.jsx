import React, { Component } from 'react'
import { connect } from 'react-redux'
import Select from 'react-select'
import styles from '../styles/AddTodo.module.scss'
class SelectList extends Component {
  render() {
    const options = this.props.allLists.map((list) => ({
      value: list.id,
      label: list.name
    }))
    // in edit mode retrieve default list
    const defaultList =
      this.props.default &&
      options.filter((list) => list.value === this.props.default)[0]
    console.log('list options', options, defaultList)

    return (
      <>
        <Select
          className={styles.list_selector}
          classNamePrefix='select'
          placeholder='List'
          defaultValue={defaultList || ''}
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
  allLists: state.allLists
})
export default connect(mapStateToProps)(SelectList)
