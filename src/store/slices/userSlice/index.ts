import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserState } from '../../../types/StoreTypes/UserState';
import { extraReducers } from './userAsync';
import { MessageType } from '../../../types/MessageType';

const initialState: UserState = {
  id: null,
  isAuth: false,
  message: {
    title: null,
    type: undefined,
  },
  openMessage: false,
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
  },
  extraReducers,
});

export const {
  setUserId,
  setOpenMessage,
  setMessage,
  setIsAuth,
} = userSlice.actions;

export default userSlice.reducer;
