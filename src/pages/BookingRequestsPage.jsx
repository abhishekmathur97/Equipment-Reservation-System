import React, { useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { requestActions } from '../store/requestSlice';
import SearchBar from '../components/search-bar/SearchBar';
import List from '../components/list/List';

const dummyRequests = [{
    id: 1,
    bookedBy: 'galinaleespb@gmail.com',
    bookingDates: null,  
    equipmentId: 1,
    status: 'pending',
}];

const BookingRequestsPage = () => {
    const requests = useSelector(state => state.requests.requestList);
    const [ filteredList, setFilteredList ] = useState([]);
    
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onClick = (e, id) => {
        e.preventDefault();
        navigate(`/request/${id}`);
    }

    useEffect(() => {
        setFilteredList(requests);
    }, [requests])

    useEffect((e) => {
        try {
          // with backend
        //   getUsers(localStorage.getItem('token')).then(res => {
        //     dispatch(userActions.setUsers(res));
        //   });
          // for testing without backend
          dispatch(requestActions.setRequests(dummyRequests));
        } catch (error) {
          console.log(error);
        }
    }, []);

    return (
        <section>
            <SearchBar initialList={requests}
                       filteredList={filteredList} 
                       setFilteredList={setFilteredList}/>
            <List items={filteredList} type='requests' onClick={onClick}/>
        </section>
    )
}

export default BookingRequestsPage;