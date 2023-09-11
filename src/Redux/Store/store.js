// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../Slices/userSlice'
import addressReducer from '../Slices/addressSlice'

const store = configureStore({
  reducer: {
    user: userReducer,
    address: addressReducer,
  },
});

export default store;
