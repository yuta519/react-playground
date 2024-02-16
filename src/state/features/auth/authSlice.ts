import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: 'auth',
  reducerPath: 'auth',
  initialState: {},
  reducers: {
    login: (state, action) => { console.log(state, action.payload) }
  }, 
});

export const { login } = authSlice.actions;
export default authSlice.reducer;