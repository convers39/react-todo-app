import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchTags, deleteTag } from '../store/actions/tags'
import Tag from './Tag'
import FilterWrapper from './FilterWrapper'
import Button from './Button'
import styles from '../styles/SideBar.module.scss'

class TagFilter extends Component {
  componentDidMount() {
    this.props.fetchTags()
  }

  render() {
    const { tags, deleteTag } = this.props
    return (
      <FilterWrapper id='tag-filter' filterName='Tags'>
        <div className='tag-filter-container'>
          <ul className='tag-filter'>
            {tags.map((tag) => (
              <li key={tag.id} className={styles.tag_filter_item}>
                <Tag tagText={tag.name} />
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
const mapStateToProps = (state) => ({
  tags: Object.values(state.tags.items)
})
const mapDispatchToProps = { fetchTags, deleteTag }
export default connect(mapStateToProps, mapDispatchToProps)(TagFilter)
