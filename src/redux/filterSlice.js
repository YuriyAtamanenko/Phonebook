import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    contactFiltering(state, action) {
      return (state = action.payload);
    },
  },
});

export const { contactFiltering } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
