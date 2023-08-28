import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import userSlice from './userSlice';
import selectionSlice from './selectionSlice';

export default configureStore({
	reducer: {
		user: userSlice,
		selection: selectionSlice,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});