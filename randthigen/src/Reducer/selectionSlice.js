import { createSlice } from '@reduxjs/toolkit';

export const selectionSlice = createSlice({
	name: 'selection',
	initialState: {
		genre: 'Fantasy',
		generate: 'Person',
		AI: 'On',
	},
	reducers: {
		genreSelect: (state, action) => {
			state.genre = action.payload.genre;
		},
		generateSelect: (state, action) => {
			state.generate = action.payload.generate;
		},
		AISelect: (state, action) => {
			state.AI = action.payload.AI;
		},
	},
});

export const { genreSelect, generateSelect, AISelect } = selectionSlice.actions;

export default selectionSlice.reducer;
