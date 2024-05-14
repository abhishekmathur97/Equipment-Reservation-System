import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import BookingRequest from '../components/booking/BookingRequest';

const BookingRequestPage = () => {
    const { id } = useParams();
    const requestsList = useSelector(state => state.bookings.bookingList);
    const requestById = requestsList.find((request) => request.id === id);

    return (
        <section className='form__container'>
            <BookingRequest request={requestById}/>
        </section>
    )
}

export default BookingRequestPage;