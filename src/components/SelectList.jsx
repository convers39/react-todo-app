import React, { Component } from 'react'
import { connect } from 'react-redux'
import Select from 'react-select'
import styles from '../styles/AddTodo.module.scss'
class SelectList extends Component {
  render() {
    console.log('SelectList', this.props)
    const options = this.props.allLists.map((list) => ({
      value: list.id,
      label: list.name
    }))

    return (
      <>
        <Select
          className={styles.list_selector}
          classNamePrefix='select'
          placeholder='List'
          defaultValue={''}
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
