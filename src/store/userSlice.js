import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthorized: false,
  users: [],
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
    setUsers: (state, action) => {
        state.users = action.payload.map(user => ({ id: user._id, email: user.email }));
    },
  },
})

export const userActions = userSlice.actions;

export default userSlice.reducer;