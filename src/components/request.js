import React, { useState } from 'react';

const BookingRequest = ({ bookingDates, bookedBy, equipmentId }) => {
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
    <div className="booking-request">
      <div>
        <strong>Booking Dates:</strong> {bookingDates}
      </div>
      <div>
        <strong>Booked By:</strong> {bookedBy}
      </div>
      <div>
        <strong>Equipment ID:</strong> {equipmentId}
      </div>
      <div>
        <strong>Status:</strong> {status}
      </div>
      {/* Render buttons based on the status */}
      {status === 'pending' && (
        <div>
          <button onClick={handleAccept}>Accept</button>
          <button onClick={handleDecline}>Decline</button>
        </div>
      )}
    </div>
  );
};

export default BookingRequest;
