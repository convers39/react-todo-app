import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { TAG_STORE } from '../store'
import CreatableSelect from 'react-select/creatable'
import styles from '../styles/AddTodo.module.scss'

@inject(TAG_STORE)
@observer
class SelectTag extends Component {
  // componentDidMount() {
  //   this.props[TAG_STORE].fetchTags()
  // }

  handleChange = (options) => {
    const tags = options.map((obj) => obj.label.toLowerCase())
    // check if new tag is created, then fire add tag action
    const currentTags = this.props[TAG_STORE].tags.map((tag) => tag.name)
    const newTags = tags.filter((tag) => !currentTags.includes(tag))
    newTags.length && newTags.map((tag) => this.props[TAG_STORE].addTag(tag))
    // pass tag list to edit form
    this.props.onChange(tags)
  }

  render() {
    let { defaultTags } = this.props
    const { tags } = this.props[TAG_STORE]

    const options = tags.map((tag) => ({
      value: tag.id,
      label: tag.name
    }))

    // in edit mode retrieve default tags, defaultTags only contains tagName
    defaultTags =
      defaultTags &&
      defaultTags.map((tagName) => {
        const [tagObj] = tags.filter((tag) => tag.name === tagName)
        return { value: tagObj.id, label: tagObj.name }
      })

    return (
      <CreatableSelect
        className={styles.tag_selector}
        classNamePrefix='select'
        isMulti
        placeholder='Tags'
        value={defaultTags || ''}
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
    )
  }
}

export default SelectTag
