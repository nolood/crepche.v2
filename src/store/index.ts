import { configureStore } from '@reduxjs/toolkit';
import { devSlice, userSlice } from './slices';
import basketSlice from './slices/basketSlice';

const store = configureStore({
  reducer: {
    user: userSlice,
    dev: devSlice,
    basket: basketSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
