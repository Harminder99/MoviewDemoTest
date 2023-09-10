import {PayloadAction, createSlice} from '@reduxjs/toolkit';

import {Movie} from '../../apis/api-types';

interface MovieState {
  movie: Movie | undefined;
}

const initialState: MovieState = {
  movie: undefined,
};

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setMovie: (state, action: PayloadAction<Movie>) => {
      state.movie = action.payload;
    },
  },
});

export const {setMovie} = movieSlice.actions;
export default movieSlice.reducer;
