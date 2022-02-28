import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const getGames = createAsyncThunk(
	'games/getGames',
	async (url) => {
		const response = await fetch(url);
		if (response.ok) {
			const result = await response.json();
			return result;
		}
	}
);

export const gamesSlice = createSlice({
	name: 'games',
	initialState: {
		games: [],
		isLoaded: true,
		url: 'https://rawg.io/api/games?key=3ab57b62be844a19885e0fffc9bdd397&page=1&page_size=12',
		prevUrl: '',
		nextUrl: ''
	},
	reducers: {
		stateUrl: (state, { payload }) => {
			state.url = payload;
		},
		stateGames: (state, { payload }) => {
			state.games = payload;
		}
	},
	extraReducers: {
		[getGames.pending]: (state) => {
			state.isLoaded = true;
		},
		[getGames.fulfilled]: (state, { payload }) => {
			state.games = payload.results;
			state.prevUrl = payload.previous;
			state.nextUrl = payload.next;
			state.isLoaded = false;
		},
		[getGames.rejected]: (state) => {
			state.isLoaded = false;
		}
	}
});

export { getGames };
export const { stateUrl, stateGames } = gamesSlice.actions;
export default gamesSlice.reducer;
