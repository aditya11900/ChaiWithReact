//1st configureStore

import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice';

//2nd import 

export const store = configureStore({
    reducer: todoReducer
});