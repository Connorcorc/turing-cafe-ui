import React, { Component } from 'react'
import './Form.css'

class Form extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      date: '',
      time: '',
      guests: 0
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value})
  }

  makeReservation = event => {
    event.preventDefault()
    const newReservation = {
      id: Date.now(),
      ...this.state
    }
    this.props.addReservation(newReservation)
    this.clearInput()
  }

  clearInput = () => {
    this.setState({
      name: '',
      date: '',
      time: '',
      guests: 0
    })
  }

  render() {
    return (
      <form>
        <input type='text' placeholder='Name' name='name' value={this.state.name} onChange={event => this.handleChange(event)} />
        <input type='date' placeholder='Date' name='date' value={this.state.date} onChange={event => this.handleChange(event)} />
        <input type='time' placeholder='Time' name='time' value={this.state.time} onChange={event => this.handleChange(event)} />
        <input type='text' placeholder='guests' name='guests' value={this.state.guests} onChange={event => this.handleChange(event)} />
        <button onClick={event => this.makeReservation(event)}>Make Reservation!</button>
      </form>
    )
  }
}

export default Form
