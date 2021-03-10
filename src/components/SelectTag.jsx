import React, { Component } from 'react'
import { connect } from 'react-redux'
import CreatableSelect from 'react-select/creatable'
import styles from '../styles/AddTodo.module.scss'

import { fetchTags } from '../actions/tags-action'

class SelectTag extends Component {
  componentDidMount() {
    this.props.fetchTags()
  }
  render() {
    const { allTags } = this.props
    const options = allTags.map((tag) => ({ value: tag, label: tag }))
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
          onChange={this.props.onChange}
          // onInputChange={this.handleInputChange}
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

const mapDispatchToProps = { fetchTags }
const mapStateToProps = (state) => ({
  allTags: state.allTags
})
export default connect(mapStateToProps, mapDispatchToProps)(SelectTag)
