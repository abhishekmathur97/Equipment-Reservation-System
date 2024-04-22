import { useParams } from 'react-router-dom';
import EquipmentForm from '../components/equipment/EquimentForm';

const EquipmentPage = () => {
    const { id } = useParams();

    return (
        <section>
            <h3>Equipment {id}</h3>
            <EquipmentForm />
        </section>
    )
}

export default EquipmentPage;