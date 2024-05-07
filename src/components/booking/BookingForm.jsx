import React, { useState } from 'react';

const BookingForm = ({ equipment = null, booking = null }) => {
    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit} className='column'>
            <h3>{ booking ? `ID${booking.id} - ${booking.name}: Edit the booking` : 
                `ID${equipment.id} - ${equipment.name }: Make a booking` }</h3>
            <button type="submit" className='primary'>
                Submit
            </button>
        </form>
    );
};

export default BookingForm;