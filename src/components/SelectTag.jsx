import React, { Component } from 'react'
import { connect } from 'react-redux'
import CreatableSelect from 'react-select/creatable'
import styles from '../styles/AddTodo.module.scss'

import { fetchTags } from '../actions/tags'

class SelectTag extends Component {
  componentDidMount() {
    this.props.fetchTags()
  }
  render() {
    const options = this.props.tags.map((tag) => ({
      value: tag,
      label: tag
    }))
    // in edit mode retrieve default tags
    const defaultTags = this.props.default.map((tag) => ({
      value: tag,
      label: tag
    }))
    console.log('default tags', defaultTags)

    return (
      <>
        <CreatableSelect
          className={styles.tag_selector}
          classNamePrefix='select'
          isMulti
          placeholder='Tags'
          defaultValue={defaultTags || ''}
          isClearable={true}
          isSearchable={true}
          name='tag-selector'
          options={options}
          onChange={this.props.onChange}
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
const mapStateToProps = (state) => ({ tags: Object.values(state.tags.items) })
export default connect(mapStateToProps, mapDispatchToProps)(SelectTag)
