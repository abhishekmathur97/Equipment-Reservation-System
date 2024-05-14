import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import List from '../components/list/List';
import SearchBar from "../components/search-bar/SearchBar";
import { useEffect, useState } from "react";
import { equipmentActions } from "../store/equipmentSlice";

const HomePage = () => {
    const equipmentList = useSelector(state => state.equipment.equipmentList);
    const currentUser = useSelector(state => state.user.currentUser);
    const [ filteredList, setFilteredList ] = useState([]);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        setFilteredList(equipmentList);
    }, [equipmentList])

    const onClick = (e, id) => {
        e.preventDefault();
        navigate(`/book/`, {
            state: { key: id }
        });
    }

    const onDelete = (e, id) => {
        e.preventDefault();
        dispatch(equipmentActions.deleteById(id));
    }

    return (
        <section>
            <SearchBar initialList={equipmentList}
                       filteredList={filteredList} 
                       setFilteredList={setFilteredList}/>
            {currentUser?.role === 'ADMIN' &&(
                <Link to='/equipment/null'>
                    <button className="tertiary" style={{ margin: '10px' }}>+ New Equipment</button>
                </Link>
            )}
            <List items={filteredList} type='equipment' onClick={onClick} onDelete={onDelete}/>
        </section>
    )
}

export default HomePage;