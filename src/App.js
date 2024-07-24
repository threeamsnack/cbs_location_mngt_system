import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';
import './App.css';

export default function App() {
  const [dateState, setDateState] = useState(new Date());
  const [bookings, setBookings] = useState([]);
  const [selectedBookings, setSelectedBookings] = useState([]);
  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => setBookings(data));
  }, []);

  const changeDate = (date) => {
    setDateState(date);
    const selectedBookings = bookings.filter(b => b.Date === moment(date).format('YYYY-MM-DD'));
    setSelectedBookings(selectedBookings);
  };

  const tileClassName = ({ date, view }) => {
    if (view === 'month') {
      const dateStr = moment(date).format('YYYY-MM-DD');
      if (bookings.some(b => b.Date === dateStr)) {
        return 'booked';
      }
    }
    if (date.getDate() === new Date().getDate() &&
        date.getMonth() === new Date().getMonth() &&
        date.getFullYear() === new Date().getFullYear()) {
      return 'today';
    }
    return null;
  };

  return (
    <>
      <Calendar
        value={dateState}
        onChange={changeDate}
        tileClassName={tileClassName}
      />
      
      {selectedBookings.length > 0 && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setSelectedBookings([])}>&times;</span>
            <h2>Details</h2>
            {selectedBookings.map((booking, index) => (
              <div key={index}>
                <p>Society Name: {booking.Society_Name}</p>
                <p>Date: {booking.Date}</p>
                <p>Location: {booking.Location}</p>
                <p>Time: {booking.From} - {booking.To}</p>
                <p>Status: {booking.Status}</p>
                <hr />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}