import React, { Component } from 'react'
import Select from 'react-select'
import styles from '../styles/AddTodo.module.scss'

export default class SingleSelect extends Component {
  render() {
    const options = [
      { value: 1, label: 'list 1' },
      { value: 2, label: 'list 2' }
    ]

    return (
      <>
        <Select
          className={styles.list_selector}
          classNamePrefix='select'
          placeholder='List'
          defaultValue={''}
          isClearable={true}
          isSearchable={true}
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
