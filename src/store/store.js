import { configureStore } from '@reduxjs/toolkit';
import equipmentReducer from './equipmentSlice';
import userReducer from './userSlice';

export const store = configureStore({
  reducer: {
    equipment: equipmentReducer,
    user: userReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
})