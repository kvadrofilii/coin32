import { configureStore } from '@reduxjs/toolkit';
import gamesReducer from './reducers/games';

export default configureStore({
	reducer: {
		games: gamesReducer
	}
});
