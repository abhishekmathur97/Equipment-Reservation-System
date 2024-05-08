import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthorized: false,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    authorize: (state) => {
        state.isAuthorized = true
    },
    signout: (state) => {
        state.isAuthorized = false
    },
  },
})

export const userActions = userSlice.actions;

export default userSlice.reducer;