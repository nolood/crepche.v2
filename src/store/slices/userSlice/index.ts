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
  search: null,
  showCategories: false,
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
    setShowCategories(state, action: PayloadAction<boolean>) {
      state.showCategories = action.payload;
    },
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
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
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
  setSearch,
  setShowCategories,
} = userSlice.actions;

export default userSlice.reducer;
