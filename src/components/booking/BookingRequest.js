import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { requestActions } from '../../store/requestSlice';
import { bookingActions } from '../../store/bookingSlice';

const BookingRequest = ({ request }) => {
  // State to track the status of the booking request
  const [status, setStatus] = useState(request.status);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Function to handle accepting the booking request
  const handleAccept = (e) => {
    e.preventDefault();
    dispatch(bookingActions.process({
      id: request.id,
      status: 'accepted'
    }));

    navigate('/requests');
  };

  // Function to handle declining the booking request
  const handleDecline = (e) => {
    e.preventDefault();
    dispatch(bookingActions.process({
      id: request.id,
      status: 'declined'
    }));
    navigate('/requests');
  };

  const onSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <form id="processRequest" onSubmit={(e) => onSubmit} className="column" style={{ alignItems: 'flex-start' }}>
      <h3>View request</h3>
      <strong>Booking Dates:</strong> {request.startDate} - {request.endDate}
      <strong>Booked By:</strong> {request.bookedBy}
      <strong>Equipment ID:</strong> {request.equipmentId}
      <strong>Status:</strong> {request.status}
      {/* Render buttons based on the status */}
      {status === 'pending' && (
        <div className='row'>
          <button type='submit' onClick={handleAccept} className='primary'>Accept</button>
          <button type='submit' onClick={handleDecline} className='error'>Decline</button>
        </div>
      )}
    </form>
  );
};

export default BookingRequest;
