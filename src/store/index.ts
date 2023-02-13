import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './features/counterSlice';
import userSlice from './features/userSlice';

const store: any = configureStore({
  reducer: {
    counter: counterSlice,
    user: userSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
