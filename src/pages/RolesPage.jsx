import { useDispatch, useSelector } from "react-redux";
import RoleAssignForm from "../components/role-assign-form/RoleAssignForm";
import List from "../components/list/List";
import SearchBar from "../components/search-bar/SearchBar";
import { getUsers } from "../utils/api";
import { userActions } from "../store/userSlice";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const dummyUsers = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Alice Johnson' },
    { id: 4, name: 'Bob Williams' },
  ];

const RolesPage = () => {
    const users = useSelector(state => state.user.users);
    const [ filteredList, setFilteredList ] = useState([]);
    
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onClick = (e, id) => {
        e.preventDefault();
        navigate(`/user-roles/${id}`);
    }

    useEffect(() => {
        setFilteredList(users);
    }, [users])

    useEffect((e) => {
        try {
          // with backend
          getUsers(localStorage.getItem('token')).then(res => {
            dispatch(userActions.setUsers(res));
          });
          // for testing without backend
          // dispatch(userActions.setUsers(dummyUsers));
        } catch (error) {
          console.log(error);
        }
    }, []);

    return (
        <section>
            <SearchBar initialList={users}
                       filteredList={filteredList} 
                       setFilteredList={setFilteredList}/>
            <List items={filteredList} type='users' onClick={onClick}/>
        </section>
    )
}

export default RolesPage;