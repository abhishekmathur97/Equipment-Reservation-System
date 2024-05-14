import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bookingList: [{
    id: '6302cfa9-23e6-419c-b993-a4df972b16d7',
    bookedBy: 'admin@ers.com',
    startDate: null,  
    endDate: null,
    equipmentId: '6302cfa9-23e6-409c-b993-a4df972b16d7',
    status: 'pending',
  }],
}

export const bookingSlice = createSlice({
  name: 'bookings',
  initialState,
  reducers: {
    setBookings: (state, action) => ({
        ...state,
        bookingList: action.payload
    }),
    addBooking: (state, action) => ({
      ...state,
      bookingList: [
        ...state.bookingList,
        action.payload
      ]
    }),
    updateBooking: (state, action) => ({
      ...state,
      bookingList: state.bookingList.map(booking => {
        if (booking.id === action.payload.id) {
          return {
            ...booking,
            startDate: action.payload.startDate,
            endDate: action.payload.endDate,
            status: 'pending'
          }
        }

        return booking
      })
    }),
    deleteById: (state, action) => (
      { ...state, bookingList: state.bookingList.filter(booking => booking.id !== action.payload) }
    ),
    process: (state, action) => ({
      ...state,
      bookingList: state.bookingList.map(request => {
        if (request.id === action.payload.id) {
          return {
            ...request,
            status: action.payload.status
          }
        }
        return request
      })
    }),
  },
})

export const bookingActions = bookingSlice.actions;

export default bookingSlice.reducer;