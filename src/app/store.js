import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice';
import hotelReducer from '../features/hotel/hotelSlice'

export const store = configureStore( {
	reducer: {
		user: userReducer,
		hotel: hotelReducer
	}
} );