import React, { useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../components/search-bar/SearchBar';
import List from '../components/list/List';
import { bookingActions } from '../store/bookingSlice';

const MyBookingsPage = () => {
    const currentUser = useSelector(state => state.user.currentUser);
    const bookings = useSelector(state => state.bookings.bookingList);

    const myBookings = bookings.filter(booking => booking.bookedBy === currentUser?.email);
        
    const [ filteredList, setFilteredList ] = useState([]);
    
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onClick = (e, id) => {
        e.preventDefault();
        navigate(`/my-bookings/${id}`);
    }

    useEffect(() => {
        setFilteredList(myBookings);
    }, [bookings])

    // useEffect(() => {
    //     try {
    //       // with backend
    //     //   getUsers(localStorage.getItem('token')).then(res => {
    //     //     dispatch(userActions.setUsers(res));
    //     //   });
    //       // for testing without backend
    //     } catch (error) {
    //       console.log(error);
    //     }
    // }, []);

    const onDelete = (e, id) => {
        e.preventDefault();
        dispatch(bookingActions.deleteById(id));
    }

    return (
        <section>
            <SearchBar initialList={myBookings}
                       filteredList={filteredList} 
                       setFilteredList={setFilteredList}/>
            <List items={filteredList} type='bookings' onClick={onClick} onDelete={onDelete}/>
        </section>
    )
}

export default MyBookingsPage;