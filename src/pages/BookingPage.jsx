import { useParams } from 'react-router-dom';

const BookingPage = () => {
    const { id } = useParams();

    return (
        <section>
            <h3>Booking {id}</h3>
        </section>
    )
}

export default BookingPage;