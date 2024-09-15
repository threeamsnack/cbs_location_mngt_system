import React from 'react';

const RequestCard = () => {
  return (
    <div className='request-card' style={{ borderLeftColor: '#c44f4e' }}>
      <div className='request-parent'>
        <div className='field-cont'>
          <table>
            <tbody>
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
                <td><img src='/ibtn.png' className='i-btn' alt='info-button' /></td>
              </tr>
              <tr>
                <td className='field-title'>TIC Approver</td>
                <td>Kavita Rastogi</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='status-declined'>Declined</div>
      </div>
    </div>
  );
};

export default RequestCard;
