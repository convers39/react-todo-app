import React, { Component } from 'react'
import CreatableSelect from 'react-select/creatable'
import styles from '../styles/AddTodo.module.scss'

export default class SelectTag extends Component {
  // tag item
  handleChange = (newValue, actionMeta) => {
    console.group('Value Changed, new value:')
    console.log(newValue)
    // console.log(`action: ${actionMeta.action}`)
    console.groupEnd()
  }

  // direct input value
  handleInputChange = (inputValue, actionMeta) => {
    console.group('Input Changed, input value:')
    console.log(inputValue)
    // console.log(`action: ${actionMeta.action}`)
    console.groupEnd()
  }

  render() {
    const options = [
      { value: 1, label: 'js' },
      { value: 2, label: 'react' },
      { value: 3, label: 'python' }
    ]

    return (
      <>
        <CreatableSelect
          className={styles.tag_selector}
          classNamePrefix='select'
          isMulti
          placeholder='Tags'
          defaultValue={''}
          isClearable={true}
          isSearchable={true}
          name='tag-selector'
          options={options}
          onChange={this.handleChange}
          onInputChange={this.handleInputChange}
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
