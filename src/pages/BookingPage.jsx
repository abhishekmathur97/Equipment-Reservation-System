import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import BookingForm from '../components/booking/BookingForm';

const BookingPage = () => {
    const { id } = useParams();

    return (
        <section className='form__container'>
            <BookingForm bookingId={id}/>
        </section>
    )
}

export default BookingPage;