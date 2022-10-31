import React from 'react'
import './Reservation.css'
import Card from '../Card/Card.js'

const Reservation = ({reservations, deleteReservation}) => {
  const reservationCard = reservations.map(reservation => {
    return (
      <Card name={reservation.name} date={reservation.date} time={reservation.time} guests= {reservation.guests} id={reservation.id} key={reservation.id} deleteReservation={deleteReservation} />
    )
  })

  return (
    <div className="res-container">
      {reservationCard}
    </div>
  )
}


export default Reservation
