import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserState } from '../../../types/StoreTypes/UserState';
import { extraReducers } from './userAsync';
import { MessageType } from '../../../types/MessageType';

const initialState: UserState = {
  id: null,
  isAuth: false,
  openMessage: false,
  activeCategory: null,
  activeSubCategory: null,
  message: {
    title: null,
    type: undefined,
  },
  sorting: {
    title: 'цене',
    sortBy: 'desc',
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserId(state, action: PayloadAction<string>) {
      state.id = action.payload;
    },
    setOpenMessage(state, action: PayloadAction<boolean>) {
      state.openMessage = action.payload;
    },
    setMessage(state, action: PayloadAction<MessageType>) {
      state.message = action.payload;
    },
    setIsAuth(state, action: PayloadAction<boolean>) {
      state.isAuth = action.payload;
    },
    setSorting(state, action: PayloadAction<{ title: string, sortBy: string }>) {
      state.sorting = { ...action.payload };
    },
    setActiveCategory(state, action: PayloadAction<{ title: string, id: string }>) {
      state.activeCategory = action.payload;
    },
    setActiveSubCategory(state, action: PayloadAction<{ title: string, id: string }>) {
      state.activeSubCategory = action.payload;
    },
  },
  extraReducers,
});

export const {
  setUserId,
  setOpenMessage,
  setMessage,
  setIsAuth,
  setSorting,
  setActiveCategory,
  setActiveSubCategory,
} = userSlice.actions;

export default userSlice.reducer;
