import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  requestList: [],
}

export const requestSlice = createSlice({
  name: 'requests',
  initialState,
  reducers: {
    setRequests: (state, action) => ({
        ...state,
        requestList: action.payload
    }),
  },
})

export const requestActions = requestSlice.actions;

export default requestSlice.reducer;