import React, { Component } from 'react'
import DatePicker from 'react-datepicker'
import { registerLocale, setDefaultLocale } from 'react-datepicker'
import enCA from 'date-fns/locale/en-CA'

import styles from '../styles/AddTodo.module.scss'

import 'react-datepicker/dist/react-datepicker.css'
registerLocale('en-ca', enCA)

export default class SelectDate extends Component {
  state = { date: new Date() }

  handleChange = (newDate) => {
    this.setState({ date: newDate })
    this.props.onChange(newDate)
  }

  render() {
    return (
      <DatePicker
        locale='en-ca'
        className={styles.date_picker}
        id='datePicker'
        selected={this.state.date}
        onChange={this.handleChange}
      />
    )
  }
}
