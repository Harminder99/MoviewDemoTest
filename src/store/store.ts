import {configureStore} from '@reduxjs/toolkit';
import movieSlice from './slices/movie-slice';

const store = configureStore({
  reducer: {
    movie: movieSlice,
    // Add more slices as needed
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
