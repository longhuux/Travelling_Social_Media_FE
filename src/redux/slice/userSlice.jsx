// userSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchAllUsers = createAsyncThunk('user/fetchAllUsers', async () => {
  const response = await fetch('http://localhost:8000/api/v1/user/get_all_user');
  const data = await response.json();
  return data.user;
});

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllUsers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllUsers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.users = action.payload;
      })
      .addCase(fetchAllUsers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default usersSlice.reducer;
