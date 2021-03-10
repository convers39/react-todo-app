import React, { Component } from 'react'
import Tag from './Tag'
import FilterWrapper from './FilterWrapper'

import { getDataFromLocalStorage } from '../initialData'

export default class TagFilter extends Component {
  render() {
    const allTags = getDataFromLocalStorage('tags')
    return (
      <FilterWrapper id='tag-filter' filterName='Tags'>
        <div className='tag-filter-container'>
          <ul className='tag-filter'>
            {allTags.map((tag) => (
              <li key={tag} className='tag-filter__item'>
                <Tag tagText={tag} />
              </li>
            ))}
          </ul>
        </div>
      </FilterWrapper>
    )
  }
}
