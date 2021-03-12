import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchTags } from '../actions/tags'
import Tag from './Tag'
import FilterWrapper from './FilterWrapper'

class TagFilter extends Component {
  render() {
    return (
      <FilterWrapper id='tag-filter' filterName='Tags'>
        <div className='tag-filter-container'>
          <ul className='tag-filter'>
            {this.props.tags.map((tag) => (
              <li key={tag.id} className='tag-filter__item'>
                <Tag tagText={tag.name} />
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
const mapDispatchToProps = { fetchTags }
export default connect(mapStateToProps, mapDispatchToProps)(TagFilter)
