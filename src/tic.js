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
   <div className='nav-bar'>
    <img src='/logo-transparent.png' className='college-logo' alt='sscbs-logo'></img>
    <h1 className='title'>College Location Management System</h1>
    <img className='user-img' src='/yuva.png'></img>
   </div>

 

<div className='section-parent'>
<div className='section-left'>
   <div className='nav-cont'>
   <div className='nav-opt-active'>Raise Request</div>
   <div className='nav-opt'>Track Request</div>
   </div>


   <div style={{marginBottom: '5rem'}}>
    <div className='request-card'>
      <div className='request-parent'>
      <div className='field-cont'>
      <table>
       <tr>
        <td className='field-title'>LOCATION</td>
        <td>12-05-2024</td>
       </tr>
       <tr>
        <td className='field-title'>DATE</td>
        <td>12-05-2024</td>
       </tr>
       <tr>
        <td className='field-title'>TIME</td>
        <td>14:00 - 19:00</td>
       </tr>
       <tr>
        <td className='field-title'>PURPOSE</td>
        <td>i</td>
       </tr>
       <tr>
        <td className='field-title'>TIC Approver</td>
        <td>Dr. Narender Kumar Nigam</td>
       </tr>
      </table>
      </div>
      <div className='status-approved'>Approved</div>
      </div>
    </div>

    <div className='request-card'>
      <div className='request-parent'>
      <div>
      <table className='field-cont'>
       <tr>
        <td className='field-title'>LOCATION</td>
        <td>12-05-2024</td>
       </tr>
       <tr>
        <td className='field-title'>DATE</td>
        <td>12-05-2024</td>
       </tr>
       <tr>
        <td className='field-title'>TIME</td>
        <td>14:00 - 19:00</td>
       </tr>
       <tr>
        <td className='field-title'>PURPOSE</td>
        <td>i</td>
       </tr>
       <tr>
        <td className='field-title'>TIC Approver</td>
        <td>Kavita Rastogi</td>
       </tr>
      </table>
      </div>
      <div className='status-inprog'>Under Review</div>
      </div>
    </div>

    <div className='request-card'>
      <div className='request-parent'>
      <div className='field-cont'>
      <table>
       <tr>
        <td className='field-title'>LOCATION</td>
        <td>12-05-2024</td>
       </tr>
       <tr>
        <td className='field-title'>DATE</td>
        <td>12-05-2024</td>
       </tr>
       <tr>
        <td className='field-title'>TIME</td>
        <td>14:00 - 19:00</td>
       </tr>
       <tr>
        <td className='field-title'>PURPOSE</td>
        <td>i</td>
       </tr>
       <tr>
        <td className='field-title'>TIC Approver</td>
        <td>Kavita Rastogi</td>
       </tr>
      </table>
      </div>
      <div className='status-declined'>Declined</div>
      </div>
    </div>

    <div className='request-card'>
      <div className='request-parent'>
      <div className='field-cont'>
      <table>
       <tr>
        <td className='field-title'>LOCATION</td>
        <td>12-05-2024</td>
       </tr>
       <tr>
        <td className='field-title'>DATE</td>
        <td>12-05-2024</td>
       </tr>
       <tr>
        <td className='field-title'>TIME</td>
        <td>14:00 - 19:00</td>
       </tr>
       <tr>
        <td className='field-title'>PURPOSE</td>
        <td>i</td>
       </tr>
       <tr>
        <td className='field-title'>TIC Approver</td>
        <td>Kavita Rastogi</td>
       </tr>
      </table>
      </div>
      <div className='status-approved'>Approved</div>
      </div>
    </div>

    <div className='request-card'>
      <div className='request-parent'>
      <div className='field-cont'>
      <table>
       <tr>
        <td className='field-title'>LOCATION</td>
        <td>12-05-2024</td>
       </tr>
       <tr>
        <td className='field-title'>DATE</td>
        <td>12-05-2024</td>
       </tr>
       <tr>
        <td className='field-title'>TIME</td>
        <td>14:00 - 19:00</td>
       </tr>
       <tr>
        <td className='field-title'>PURPOSE</td>
        <td>i</td>
       </tr>
       <tr>
        <td className='field-title'>TIC Approver</td>
        <td>Kavita Rastogi</td>
       </tr>
      </table>
      </div>
      <div className='status-approved'>Approved</div>
      </div>
    </div>
    
   </div>

   </div>

   <div className='section-right'>

    <div className='info-cont'>
      <h4>Societies In-Charge</h4>
      <div style={{paddingBottom: '8px'}}>
      <h5>YUVA</h5>
      <h5>ECOCLUB</h5>
      <h5>IFSA</h5>
      <h5>NUCLEUS</h5>
      </div>
    </div>
    
    
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
   </div>
   </div>
    </>
  );
}