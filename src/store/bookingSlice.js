import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bookingList: [],
}

export const bookingSlice = createSlice({
  name: 'bookings',
  initialState,
  reducers: {
    setBookings: (state, action) => ({
        ...state,
        bookingList: action.payload
    }),
  },
})

export const bookingActions = bookingSlice.actions;

export default bookingSlice.reducer;