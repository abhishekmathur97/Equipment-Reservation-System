import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import List from '../components/list/List';

const HomePage = () => {
    const equipmentList = useSelector(state => state.equipment.equipmentList);

    return (
        <section>
            <List items={equipmentList} tags={true}/>
        </section>
    )
}

export default HomePage;