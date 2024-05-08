import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import List from '../components/list/List';
import SearchBar from "../components/search-bar/SearchBar";
import { useEffect, useState } from "react";
import { equipmentActions } from "../store/equipmentSlice";

const HomePage = () => {
    const equipmentList = useSelector(state => state.equipment.equipmentList);
    const [ filteredList, setFilteredList ] = useState([]);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        setFilteredList(equipmentList);
    }, [equipmentList])

    const onClick = (e, id) => {
        e.preventDefault();
        navigate(`/book/${id}`);
    }

    const onDelete = (e, id) => {
        e.preventDefault();
        dispatch(equipmentActions.deleteById(id));
        console.log(equipmentList);
    }

    return (
        <section>
            <SearchBar initialList={equipmentList}
                       filteredList={filteredList} 
                       setFilteredList={setFilteredList}/>
            <List items={filteredList} type='equipment' onClick={onClick} onDelete={onDelete}/>
        </section>
    )
}

export default HomePage;