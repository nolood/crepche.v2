import { createSlice } from '@reduxjs/toolkit';
import { extraReducers } from './basketAsync';
import { BasketState } from '../../../types/StoreTypes/BasketState';

const initialState: BasketState = {
  basketItems: [],
};

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {

  },
  extraReducers,
});

export const {
} = basketSlice.actions;

export default basketSlice.reducer;
