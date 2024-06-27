import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MovieDetails } from '../background';

type MovieState  = {
  details: any;
  history: MovieDetails[];
}

const initialState: MovieState = {
  details: null,
  history: [],
};

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setMovieDetails: (state, action: PayloadAction<MovieDetails>) => {
      state.details = action.payload;
      // state.history.unshift(action.payload); // Add new search to the beginning of history
    },
    setMovieHistory: (state, action: PayloadAction<MovieDetails[]>) => {
      state.history = action.payload;
    }
  },
});

export const { setMovieDetails, setMovieHistory } = movieSlice.actions;
export default movieSlice.reducer;
