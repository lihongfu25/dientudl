import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IBreadcrumb } from 'src/constants';

interface BreadcrumbState {
	items: IBreadcrumb[];
}

const initialState: BreadcrumbState = {
	items: [],
};

const breadcrumbSlice = createSlice({
	name: 'breadcrumb',
	initialState,
	reducers: {
		setBreadcrumb: (state, action: PayloadAction<IBreadcrumb[]>) => {
			state.items = action.payload;
		},
		clearBreadcrumb: (state) => {
			state.items = [];
		},
	},
});

export const { setBreadcrumb, clearBreadcrumb } = breadcrumbSlice.actions;
export default breadcrumbSlice.reducer;
