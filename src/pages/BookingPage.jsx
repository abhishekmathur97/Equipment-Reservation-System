import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import BookingForm from '../components/booking/BookingForm';

const BookingPage = () => {
    const { id } = useParams();
    const equipmentList = useSelector(state => state.equipment.equipmentList);
    const equipmentById = equipmentList.find((equipment) => equipment.id === parseInt(id));

    return (
        <section className='form__container'>
            <BookingForm equipment={equipmentById}/>
        </section>
    )
}

export default BookingPage;