import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { bookingActions } from '../../store/bookingSlice';

const BookingForm = ({ 
    bookingId = null, 
    equipmentId = null }) => {
    const bookingList = useSelector(state => state.bookings.bookingList);
    const equipmentList = useSelector(state => state.equipment.equipmentList);

    const currentUser = useSelector(state => state.user.currentUser)

    const [booking, setBooking] = useState(null);
    const [equipment, setEquipment] = useState(null);
    const [dates, setDates] = useState({
        start: '',
        end: ''
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (bookingId) {
            const booking = bookingList.find(booking => booking.id === bookingId);
            setBooking(booking);

            const equipment = equipmentList.find(equipment => equipment.id === booking.equipmentId);
            setEquipment(equipment);

            setDates({
                start: booking.startDate || '',
                end: booking.endDate || '',
            });
        }

        if (equipmentId) {
            const equipment = equipmentList.find(equipment => equipment.id === equipmentId);
            setEquipment(equipment);
        }
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!bookingId) {
            dispatch(bookingActions.addBooking({
                id: crypto.randomUUID(),
                bookedBy: currentUser?.email,
                startDate: dates.start,
                endDate: dates.end,  
                equipmentId: equipment.id,
                status: 'pending',
            }));
        } else {
            dispatch(bookingActions.updateBooking({
                id: bookingId,
                startDate: dates.start,
                endDate: dates.end,
            }));
        }

        navigate('/my-bookings');
    };

    return (
        <form onSubmit={handleSubmit} className='column'>
            <h3>{ bookingId ? `Edit the booking` : 
                `Make a booking` }</h3>
            <h4 style={{ alignSelf: 'flex-start', margin: 0 }}>Equipment</h4>
            <span>{equipment?.id}, {equipment?.name}, {equipment?.description}</span>

            <h4 style={{ alignSelf: 'flex-start', margin: 0 }}>Booking Dates</h4>
            <div className='row' style={{ width: '100%', marginBottom: '10px' }}>
                <input type="date" value={dates.start} onChange={e => setDates(prev => ({...prev, start: e.target.value}))}/>
                <input type="date" value={dates.end} onChange={e => setDates(prev => ({...prev, end: e.target.value}))}/>
            </div>
            <button type="submit" className='primary'>
                { bookingId ? 'Update' : 'Book' }
            </button>
        </form>
    );
};

export default BookingForm;