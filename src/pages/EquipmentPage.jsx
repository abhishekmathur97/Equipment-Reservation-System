import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import EquipmentForm from '../components/equipment/EquipmentForm';

const EquipmentPage = () => {
    const { id } = useParams();
    const equipmentList = useSelector(state => state.equipment.equipmentList);
    const equipmentById = equipmentList.find((equipment) => equipment.id === parseInt(id));

    return (
        <section className='form__container'>
            <EquipmentForm equipment={equipmentById}/>
        </section>
    )
}

export default EquipmentPage;