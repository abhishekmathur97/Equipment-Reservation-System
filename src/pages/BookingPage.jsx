import { useLocation, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import BookingForm from '../components/booking/BookingForm';

const BookingPage = () => {
    const { id } = useParams();
    const location = useLocation();

    return (
        <section className='form__container'>
            <BookingForm bookingId={id} equipmentId={location.state?.key}/>
        </section>
    )
}

export default BookingPage;