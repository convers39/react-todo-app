import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { TAG_STORE } from '../store'
import Tag from './Tag'
import FilterWrapper from './FilterWrapper'
import Button from './Button'
import styles from '../styles/SideBar.module.scss'

@inject(TAG_STORE)
@observer
class TagFilter extends Component {
  componentDidMount() {
    this.props[TAG_STORE].fetchTags()
  }

  render() {
    console.log('tag filter', this.props[TAG_STORE])
    const { tags, deleteTag } = this.props[TAG_STORE]

    return (
      <FilterWrapper id='tag-filter' filterName='Tags'>
        <div className='tag-filter-container'>
          <ul className='tag-filter'>
            {tags.map((tag) => (
              <li key={tag.id} className={styles.tag_filter_item}>
                <Tag tagName={tag.name} />
                <Button
                  buttonType={'delete'}
                  icon={'delete'}
                  onClick={() => deleteTag(tag.id)}
                />
              </li>
            ))}
          </ul>
        </div>
      </FilterWrapper>
    )
  }
}

// const TagFilterContainer = inject((stores) => ({
//   tags: Object.values(stores[TAG_STORE].tags.items),
//   deleteTag: stores[TAG_STORE].deleteTag,
//   fetchTags: stores[TAG_STORE].fetchTags
// }))(TagFilter)

export default TagFilter
