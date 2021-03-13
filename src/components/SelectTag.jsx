import React, { Component } from 'react'
import { connect } from 'react-redux'
import CreatableSelect from 'react-select/creatable'
import styles from '../styles/AddTodo.module.scss'

import { fetchTags, addTag } from '../actions/tags'

class SelectTag extends Component {
  componentDidMount() {
    this.props.fetchTags()
  }

  handleChange = (options) => {
    const tags = options.map((obj) => obj.label.toLowerCase())
    // check if new tag is created and fire add tag action
    const currentTags = this.props.tags.map((tag) => tag.name)
    const newTags = tags.filter((tag) => !currentTags.includes(tag))

    newTags.length && newTags.map((tag) => this.props.addTag(tag))

    this.props.onChange(tags)
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
        return tagObj && { value: tagObj.id, label: tagObj.name }
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
          onChange={this.handleChange}
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

const mapDispatchToProps = { fetchTags, addTag }
const mapStateToProps = (state) => ({ tags: Object.values(state.tags.items) })
export default connect(mapStateToProps, mapDispatchToProps)(SelectTag)
