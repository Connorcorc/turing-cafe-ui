import React, { Component } from 'react';
import Reservation from '../Reservation/Reservation.js'
import Form from '../Form/Form.js'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      reservations: []
    }
  }

  addReservation = (newReservation) => {
    this.setState({reservations: [...this.state.reservations, newReservation]})
  }

  deleteReservation = (id) => {
    const filterReservations = this.state.reservations.filter(reservation => reservation.id !== id)
    this.setState({ reservations: filterReservations})
  }
  render() {
    return (
      <main className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
        <Form addReservation={this.addReservation}/>
        </div>
        <div className='resy-container'>
        {!this.state.reservations.length && <h2>Please Make a Reservation!</h2>}
        <Reservation reservations={this.state.reservations} deleteReservation={this.deleteReservation} />
        </div>
      </main>
    )
  }
}

export default App;
