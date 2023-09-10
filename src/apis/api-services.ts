import {Movies} from './api-types';
import {PopularMovies} from './api-constants';
import api from './api';
import {useQuery} from '@tanstack/react-query';

// this hook will help you get response from Api
export function useMoviesList() {
  return useQuery<Movies, Error>(['movie'], async () => {
    const {data} = await api.get(PopularMovies);
    return data;
  });
}
