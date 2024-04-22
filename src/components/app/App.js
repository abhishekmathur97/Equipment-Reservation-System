import React, { useEffect } from 'react';
import { Routes, 
         Route,
         useLocation } from 'react-router-dom';
import { HomePage,
         LoginPage,
         MyBookingsPage, 
         BookingPage, 
         EquipmentPage} from '../../pages/index';
import Header from '../header/Header';
import { useDispatch } from 'react-redux';
import { userActions } from '../../store/userSlice';
import { ProtectedRouterElement } from '../protected-router-element/ProtectedRouterElement';

const App = () => {
  const location = useLocation();

  const locationState = location.state;
  const background = locationState?.background;

  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(userActions.authorize());
    }
  });

  return (
    <div className='app__container'>
        <Header />
        <main>
            <Routes location={ background || location }>
              <Route path='/' element={<ProtectedRouterElement element={<HomePage />}/>}/>
              <Route path='/login' element={<LoginPage />}/>
              <Route path='/my-bookings' element={<ProtectedRouterElement element={<MyBookingsPage/>}/>}/>
              <Route path='/my-bookings/:id' element={<ProtectedRouterElement element={<BookingPage/>}/>}/>
              <Route path='/equipment/:id' element={<ProtectedRouterElement element={<EquipmentPage/>}/>}/>
            </Routes>
        </main>
    </div>
  );
}

export default App;
