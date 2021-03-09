import React, { Component } from 'react'
import styles from '../styles/SideBar.module.scss'

import Button from './Button'
import FilterWrapper from './FilterWrapper'

export default class CreateList extends Component {
  render() {
    return (
      <FilterWrapper id='new-list' filterName='Create List'>
        <form className={styles.new_list_form}>
          <input
            className={styles.text_input}
            type='text'
            placeholder='List name'
          />
          <Button buttonType={'create'} text='Create' />
        </form>
      </FilterWrapper>
    )
  }
}
