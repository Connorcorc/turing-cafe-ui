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

  componentDidMount = () => {
    fetch('http://localhost:3001/api/v1/reservations')
    .then(response => response.json())
    .then(data => this.setState({ reservations: data }))
  }

  addReservation = (newReservation) => {
    this.setState({reservations: [...this.state.reservations, newReservation]})
  }

  postData = async (newReservation) => {
    const response = await fetch('http://localhost:3001/api/v1/reservations/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newReservation),
    })
    const data = await response.json()
    console.log(data)
    console.log(newReservation)
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
        <Form addReservation={this.addReservation} postData={this.postData}/>
        </div>
        <div className='resy-container'>
        {!this.state.reservations.length && <h2 className="make-res">Please Make a Reservation!</h2>}
        <Reservation reservations={this.state.reservations} deleteReservation={this.deleteReservation} />
        </div>
      </main>
    )
  }
}

export default App;
