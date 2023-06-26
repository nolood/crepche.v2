import { createSlice } from '@reduxjs/toolkit';
import { DevState } from '../../../types/StoreTypes/DevState';
import { extraReducers } from './devAsync';

const initialState: DevState = {
  categories: [],
  items: JSON.parse(String(localStorage.getItem('CREPCHE-ITEMS'))) || [],
  promoItems: [],
  popItems: [],
  offers: [],
};

const devSlice = createSlice({
  name: 'dev',
  initialState,
  reducers: {

  },
  extraReducers,
});

export const {

} = devSlice.actions;

export default devSlice.reducer;
