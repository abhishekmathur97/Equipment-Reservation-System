import React, { useState } from 'react';

const BookingRequest = ({ request }) => {
  // State to track the status of the booking request
  const [status, setStatus] = useState('pending');

  // Function to handle accepting the booking request
  const handleAccept = () => {
    setStatus('accepted');
  };

  // Function to handle declining the booking request
  const handleDecline = () => {
    setStatus('declined');
  };

  return (
    <form className="column" style={{ alignItems: 'flex-start' }}>
      <h3>View request</h3>
      <strong>Booking Dates:</strong> {request.bookingDates}
      <strong>Booked By:</strong> {request.bookedBy}
      <strong>Equipment ID:</strong> {request.equipmentId}
      <strong>Status:</strong> {request.status}
      {/* Render buttons based on the status */}
      {status === 'pending' && (
        <div className='row'>
          <button onClick={handleAccept} className='primary'>Accept</button>
          <button onClick={handleDecline} className='error'>Decline</button>
        </div>
      )}
    </form>
  );
};

export default BookingRequest;
