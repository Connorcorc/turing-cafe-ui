import React, { Component } from 'react';
// import Reservation from '..Reservation/Reservation.js'
// import Form from '..Form/Form.js'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      reservations: []
    }
  }

  addReservation = (newReservation) => {
    this.setState({reservations: [...this.state.ideas, newReservation]})
  }
  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>

        </div>
      </div>
    )
  }
}

export default App;
