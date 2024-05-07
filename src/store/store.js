import { configureStore } from '@reduxjs/toolkit';
import equipmentReducer from './equipmentSlice';
import userReducer from './userSlice';
import requestReducer from './requestSlice';
import bookingReducer from './bookingSlice';

export const store = configureStore({
  reducer: {
    equipment: equipmentReducer,
    user: userReducer,
    requests: requestReducer,
    bookings: bookingReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
})