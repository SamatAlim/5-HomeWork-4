import { configureStore } from '@reduxjs/toolkit';
import titleReducer from './titleSlice'
import usersReducer from './userSlice'
import mathSlice from './mathSlice'

export const store = configureStore({
   reducer:{
      titleReducer,
      usersReducer,
      mathSlice
   }
 });

