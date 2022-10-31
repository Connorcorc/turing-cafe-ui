import React from 'react'
import './Reservation.css'
import Card from '../Card/Card.js'

const Reservation = ({reservations, deleteReservation}) => {
  const reservationCard = reservations.map(reservation => {
    return (
      <Card name={reservation.name} date={reservation.date} time={reservation.time} id={reservation.id} key={reservation.key} deleteReservation={deleteReservation} />
    )
  })

  return (
    <div className="resContainer">
      {reservationCard}
    </div>
  )
}


export default Reservation
