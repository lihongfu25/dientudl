import { configureStore } from '@reduxjs/toolkit';
import breadcrumbReducer from '../features/breadcrumb/breadcrumbSlice';

export const store = configureStore({
	reducer: {
		breadcrumb: breadcrumbReducer,
	},
});

// Export các type hỗ trợ
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
