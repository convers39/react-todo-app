import React, { Component } from 'react'
import { connect } from 'react-redux'
import styles from '../styles/SideBar.module.scss'

import Button from './Button'
import FilterWrapper from './FilterWrapper'

import { addList } from '../actions/lists-action'

class CreateList extends Component {
  handleSubmit = (e) => {
    e.preventDefault()
    const { listName } = e.target.elements
    this.props.addList(listName.value)
    listName.value = ''
  }
  render() {
    return (
      <FilterWrapper id='new-list' filterName='Create List'>
        <form className={styles.new_list_form} onSubmit={this.handleSubmit}>
          <input
            className={styles.text_input}
            type='text'
            name='listName'
            placeholder='List name'
          />
          <Button buttonType={'create'} text='Create' />
        </form>
      </FilterWrapper>
    )
  }
}

const mapDispatchToProps = { addList }

export default connect(null, mapDispatchToProps)(CreateList)
