import { configureStore } from '@reduxjs/toolkit';
import todoListSlice from 'modules/todoListSlice';

const store = configureStore({ reducer: todoListSlice });

export type RootState = ReturnType<typeof store.getState>;

export default store;
