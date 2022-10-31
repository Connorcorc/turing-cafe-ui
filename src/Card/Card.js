import React from 'react'
import './Card.css'

const Card = ({name, date, time, guests, id, deleteReservation}) => {
  return (
    <div className='card'>
      <h2>{name}</h2>
      <p>{date}</p>
      <p>Time: {time}</p>
      <p>Number of Guests: {guests}</p>
      <button onClick={() => deleteReservation(id)}>Cancel</button>
    </div>
  )
}

export default Card
