import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import List from '../components/list/List';
import SearchBar from "../components/search-bar/SearchBar";
import { useState } from "react";

const HomePage = () => {
    const equipmentList = useSelector(state => state.equipment.equipmentList);
    const [ filteredList, setFilteredList ] = useState(equipmentList);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onClick = (e) => {
        e.preventDefault();
        navigate('/book');
    }

    const onDelete = (e) => {
        e.preventDefault();
    }

    return (
        <section>
            <SearchBar initialList={equipmentList} 
                       filteredList={filteredList} 
                       setFilteredList={setFilteredList}/>
            <List items={filteredList} tags={true}>
                <div className="row">
                    <button className="tertiary" onClick={onClick}>Book</button>
                    <button className="error" onClick={onDelete}>Delete</button>
                </div>
            </List>
        </section>
    )
}

export default HomePage;