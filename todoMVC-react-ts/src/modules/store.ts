import { configureStore } from '@reduxjs/toolkit';
import todoListReducer from 'modules/reducers';

const store = configureStore({ reducer: todoListReducer });

export type RootState = ReturnType<typeof store.getState>;

export default store;
