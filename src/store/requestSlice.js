import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  requestList: [{
    id: '6302cfa9-23e6-419c-b993-a4df972b16d5',
    bookedBy: 'admin@ers.com',
    startDate: null,  
    endDate: null, 
    equipmentId: '6302cfa9-23e6-409c-b993-a4df972b16d7',
    status: 'pending',
  }],
}

export const requestSlice = createSlice({
  name: 'requests',
  initialState,
  reducers: {
    setRequests: (state, action) => ({
        ...state,
        requestList: action.payload
    }),
    process: (state, action) => ({
      ...state,
      requestList: state.requestList.map(request => {
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

export const requestActions = requestSlice.actions;

export default requestSlice.reducer;