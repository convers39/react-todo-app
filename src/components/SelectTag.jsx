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
    let { tags, defaultTags } = this.props
    const options = tags.map((tag) => ({
      value: tag.id,
      label: tag.name
    }))

    // in edit mode retrieve default tags
    defaultTags =
      defaultTags &&
      defaultTags.map((tagName) => {
        const [tagObj] = tags.filter((tag) => tag.name === tagName)
        return { value: tagObj.id, label: tagObj.name }
      })

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
