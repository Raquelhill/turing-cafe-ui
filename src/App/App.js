import React, { Component } from 'react';
import './App.css';
import './reservationData';
import ReservationContainer from '../ReservationContainer/ReservationContainer';
import Form from '../Form/Form';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reservationData: [
        {
          id: 1,
          name: 'Christie',
          date: '12/29',
          time: '7:00',
          number: 12,
        },
        {
          id: 2,
          name: 'Leta',
          date: '4/5',
          time: '7:00',
          number: 2,
        },
        {
          id: 3,
          name: 'Pam',
          date: '1/21',
          time: '6:00',
          number: 4,
        },
        {
          id: 4,
          name: 'Khalid',
          date: '5/9',
          time: '7:30',
          number: 7,
        },
        {
          id: 5,
          name: 'Will',
          date: '5/15',
          time: '6:30',
          number: 2,
        },
        {
          id: 6,
          name: 'Eric',
          date: '5/30',
          time: '6:00',
          number: 8,
        },
        {
          id: 7,
          name: 'Robbie',
          date: '6/5',
          time: '5:30',
          number: 2,
        },
        {
          id: 8,
          name: 'Travis',
          date: '6/8',
          time: '7:00',
          number: 12,
        },
        {
          id: 9,
          name: 'Brittany',
          date: '9/9',
          time: '7:30',
          number: 3,
        },
      ],
    };
  }

  addReservation = (newReservation) => {
    console.log('hello');
    this.setState({
      reservationData: [...this.state.reservationData, newReservation],
    });
  };

  deleteReservation = (id) => {
    const filteredReservations = this.state.reservationData.filter(
      (reservation) => reservation.id != reservation
    );

    this.setState({ reservationData: filteredReservations });
  };

  render() {
    return (
      <div className="App">
        <h1 className="app-title">Turing Cafe Reservations</h1>
        <div className="resy-form"></div>
        <Form addReservation={this.addReservation} />
        <div className="resy-container">
          <ReservationContainer
            reservationData={this.state.reservationData}
            deleteReservation={this.deleteReservation}
          />
        </div>
      </div>
    );
  }
}

export default App;
