import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const BookingForm = ({ bookingId = null }) => {
    const bookingList = useSelector(state => state.bookings.bookingList);
    const [booking, setBooking] = useState(null);

    useEffect(() => {
        if (bookingId) {
            setBooking(bookingList.find(booking => booking.id === parseInt(bookingId)));
        }
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit} className='column'>
            <h3>{ bookingId ? `ID${booking?.id}: Edit the booking` : 
                `Make a booking` }</h3>
            <button type="submit" className='primary'>
                Submit
            </button>
        </form>
    );
};

export default BookingForm;