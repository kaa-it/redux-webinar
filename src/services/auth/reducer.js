import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
  },
  reducers: {
    setUser: {
        reducer: (state, action) => {
            state.user = action.payload;
        },
        prepare: (user) => {
            const id = Math.random();
            return { payload: { ...user, key: id } };
        }
    }
  } 
});

export const reducer = authSlice.reducer;
export const { setUser } = authSlice.actions;