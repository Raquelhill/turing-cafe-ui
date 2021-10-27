import React from 'react';
import './ReservationContainer.css';
import ReservationCard from '../ReservationCard/ReservationCard';

const ReservationContainer = ({ reservationData }) => {
  const reservationCards = reservationData.map((reservation) => {
    return (
      <ReservationCard
        id={reservation.id}
        name={reservation.name}
        date={reservation.date}
        time={reservation.time}
        number={reservation.number}
        key={reservation.id}
      />
    );
  });
  return <div className="reservation-container">{reservationCards}</div>;
};

export default ReservationContainer;
