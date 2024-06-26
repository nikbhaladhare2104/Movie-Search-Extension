import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface MovieState {
  details: any;
  history: any[];
}

const initialState: MovieState = {
  details: null,
  history: [],
};

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setMovieDetails: (state, action: PayloadAction<any>) => {
      state.details = action.payload;
      state.history.push(action.payload);
    },
  },
});

export const { setMovieDetails } = movieSlice.actions;
export default movieSlice.reducer;
