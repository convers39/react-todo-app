import React, { Component } from 'react'
import Tag from './Tag'
import FilterWrapper from './FilterWrapper'

import { initialTags } from '../initialData'

export default class TagFilter extends Component {
  render() {
    return (
      <FilterWrapper id='tag-filter' filterName='Tags'>
        <div className='tag-filter-container'>
          <ul className='tag-filter'>
            {initialTags.map((tag) => (
              <li className='tag-filter__item'>
                <Tag tagText={tag} />
              </li>
            ))}
          </ul>
        </div>
      </FilterWrapper>
    )
  }
}
