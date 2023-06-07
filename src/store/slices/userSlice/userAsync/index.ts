import { ActionReducerMapBuilder, createAsyncThunk } from '@reduxjs/toolkit';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import {
  getDatabase,
  ref,
  serverTimestamp,
  set,
} from 'firebase/database';
import { AuthData } from '../../../../types/StoreTypes/AuthData';
import { UserState } from '../../../../types/StoreTypes/UserState';

export const loginUser = createAsyncThunk('user/loginUserStatus', async ({ email, password }: AuthData) => {
  const auth = getAuth();
  return (await signInWithEmailAndPassword(auth, email, password)).user.uid;
});

export const regUser = createAsyncThunk('user/regUserStatus', async ({ email, password }: AuthData) => {
  const auth = getAuth();
  return {
    id: (await createUserWithEmailAndPassword(auth, email, password)).user.uid,
    email,
    password,
  };
});

export const extraReducers = (builder: ActionReducerMapBuilder<UserState>) => {
  builder.addCase(loginUser.fulfilled, (state, action) => {
    state.id = action.payload;
    state.message.title = 'Вход успешно выполнен';
    state.message.type = 'success';
  });

  builder.addCase(loginUser.rejected, (state, action) => {
    state.message.title = action.error.code;
    state.message.type = 'error';
  });

  builder.addCase(regUser.fulfilled, (state, action) => {
    state.id = action.payload.id;
    const db = getDatabase();
    const userRef = ref(db, `users/${action.payload.id}`);
    set(userRef, {
      id: action.payload.id,
      email: action.payload.email,
      password: action.payload.password,
      profilePhotoUrl: null,
      createdAt: serverTimestamp(),
    });
    state.message.title = 'Регистрация прошла успешно!';
    state.message.type = 'success';
  });

  builder.addCase(regUser.rejected, (state, action) => {
    state.message.title = action.error.code;
    state.message.type = 'error';
  });
};
