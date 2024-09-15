import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';

const BookingCalendar = () => {
  const [dateState, setDateState] = useState(new Date());
  const [bookings, setBookings] = useState([]);
  const [selectedBookings, setSelectedBookings] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => setBookings(data))
      .catch((error) => console.error('Error fetching booking data:', error));
  }, []);

  const changeDate = (date) => {
    setDateState(date);

    const formattedDate = moment(date).format('YYYY-MM-DD');
    const filteredBookings = bookings.filter(
      (booking) => booking.Date === formattedDate
    );
    setSelectedBookings(filteredBookings);
  };

  const tileClassName = ({ date, view }) => {
    if (view === 'month') {
      const dateStr = moment(date).format('YYYY-MM-DD');
      if (bookings.some((b) => b.Date === dateStr)) {
        return 'booked';
      }
    }

    const today = new Date();
    if (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    ) {
      return 'today';
    }

    return null;
  };

  return (
    <div>
      <Calendar
        value={dateState}
        onChange={changeDate}
        tileClassName={tileClassName}
      />
      {selectedBookings.length > 0 && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setSelectedBookings([])}>
              &times;
            </span>
            <h2>Booking Details</h2>
            {selectedBookings.map((booking, index) => (
              <div key={index}>
                <p>Society Name: {booking.Society_Name}</p>
                <p>Date: {booking.Date}</p>
                <p>Location: {booking.Location}</p>
                <p>
                  Time: {booking.From} - {booking.To}
                </p>
                <p>Status: {booking.Status}</p>
                <hr />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingCalendar;
