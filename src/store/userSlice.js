import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthorized: false,
  currentUser: null,
  logs: [],
  users: [{
    id: '6302cfa9-23e6-409c-b993-a4df972b16d1',
    username: 'admin',
    email: 'admin@ers.com',
    role: 'ADMIN'
  }, {
    id: '6302cfa9-23e6-409c-b993-a4df972b16d4',
    username: 'user',
    email: 'user@ers.com',
    role: 'USER'
  }],
}

function getTimestamp() {
  const timestamp = new Date().getTime();

  // Create a new Date object using the timestamp
  const date = new Date(timestamp);
  
  // Define formatting options
  const options = {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false, // Use 24-hour format
    timeZone: 'UTC', // Optionally specify timezone
  };
  
  // Format the date string
  const formattedDate = date.toLocaleString('en-US', options);
  return formattedDate;
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    authorize: (state, action) => {
      state.isAuthorized = true;
      if (action.payload)
        state.logs.push({
          timestamp: getTimestamp(),
          description: `User ${action.payload} signed in.`
        });
    },
    signout: (state, action) => {
        state.isAuthorized = false;
        if (action.payload)
          state.logs.push({
            timestamp: getTimestamp(),
            description: `User ${action.payload} signed out.`
          });
    },
    setUsers: (state, action) => {
        state.users = action.payload.map(user => ({ id: user._id, email: user.email }));
    },
    setCurrentUser: (state, action) => {
      state.currentUser = state.users.find(user => user.email === action.payload)
    },
    assignRole: (state, action) => {
      state.users = state.users.map(user => {
        if (user.id === action.payload.userId) {
          return {
            ...user,
            role: action.payload.role
          }
        }

        return user
      })
    }
  },
})

export const userActions = userSlice.actions;

export default userSlice.reducer;