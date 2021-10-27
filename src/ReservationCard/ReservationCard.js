import React from 'react';
import './ReservationCard.css';

const ReservationCard = ({
  id,
  name,
  date,
  time,
  number,
  deleteReservation,
}) => {
  return (
    <div className="reservation-card">
      <h1>{name}</h1>
      <p className="resy-date">{date}</p>
      <p className="resy-time">{time}</p>
      <p className="resy-number">Number of guests: {number}</p>
      <button onClick={() => deleteReservation(id)}>Cancel</button>
    </div>
  );
};

export default ReservationCard;
