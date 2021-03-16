import React, { Component } from 'react'
import { connect } from 'react-redux'
import { clearTagsFilter, clearListFilter } from '../store/actions/app'
import Button from './Button'
import styles from '../styles/style.module.scss'

class FilterClear extends Component {
  render() {
    const { clearType, clearTagsFilter, clearListFilter } = this.props
    let handleClick, className
    switch (clearType) {
      case 'lists':
        handleClick = clearListFilter
        className = styles.filter_clear_container
        break
      case 'tags':
        handleClick = clearTagsFilter
        break
      default:
        handleClick = () => {}
    }
    return (
      <div className={className}>
        <Button buttonType={'all'} text={'ALL TODO'} onClick={handleClick} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  currentListId: state.app.currentListId,
  selectedTags: state.app.selectedTags
})

const mapDispatchToProps = { clearTagsFilter, clearListFilter }
export default connect(mapStateToProps, mapDispatchToProps)(FilterClear)
