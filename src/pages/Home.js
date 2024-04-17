import { useSelector } from "react-redux";
import List from "../components/list/List";

const Home = () => {
    const equipmentList = useSelector(state => state.equipment.equipmentList);

    return (
        <section>
            <List items={equipmentList}/>
        </section>
    )
}

export default Home;