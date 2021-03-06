import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateSelectedTags } from '../store/actions/app'
import styles from '../styles/style.module.scss'

class Tag extends Component {
  render() {
    const { tagName, updateSelectedTags, selectedTags } = this.props
    return (
      <div
        className={`${
          selectedTags.includes(tagName) ? styles.tag_selected : ''
        } ${styles.tag_container}`}
        onClick={() => updateSelectedTags(tagName)}
      >
        <span>#{tagName.toUpperCase()}</span>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  selectedTags: state.app.selectedTags
})
const mapDispatchToProps = { updateSelectedTags }

export default connect(mapStateToProps, mapDispatchToProps)(Tag)
