import {fireEvent, render, waitFor} from '@testing-library/react-native';

import HomeScreen from '../src/ui/home/home-screen'; // Replace with your actual path
import { Movie } from '../src/apis/api-types';
import React from 'react';
import { useMoviesList } from '../src/apis/api-services';

// Mock a sample movie data for testing
const movieList:Array<Movie> = [{
  title: 'Test Movie Title',
  overview: 'Test Movie Description',
  poster_path: '/test-poster.jpg',
  vote_count: 100,
  adult: true,
  backdrop_path: '',
  genre_ids: [],
  id: 101,
  original_language: '',
  original_title: '',
  popularity: 0,
  release_date: '',
  video: false,
  vote_average: 0,
}];

// Mock your dependencies as needed, such as useDispatch and useNavigation
jest.mock('react-redux', () => ({
  useDispatch: () => jest.fn(),
}));
jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: jest.fn(),
  }),
}));
jest.mock('../src/apis/api-services.ts', () => ({
  useMoviesList: jest.fn(),
}));

describe('HomeScreen', () => {

  it('renders correctly', () => {
    const tree = render(<HomeScreen />);
    expect(tree).toMatchSnapshot();
  });

  it('renders error message when there is an error', async () => {
  // Mock the useMoviesList hook to return an error
    (useMoviesList as jest.Mock).mockReturnValue({error: new Error('Test error')})

    const {getByTestId} = render(<HomeScreen />);
    await waitFor(() => expect(getByTestId('error-message')).toBeTruthy());
  });

  it('renders empty state message when there is no data', async () => {
    // Mock the useMoviesList hook to return no data
    (useMoviesList as jest.Mock).mockReturnValue({data: {results: []}, isLoading: false})

    const {getByTestId} = render(<HomeScreen />);
    await waitFor(() => expect(getByTestId('no-movie-message')).toBeTruthy());
  });

  it('should render list of 1 movie item', async () => {
    // Mock the useMoviesList hook to return no data
    (useMoviesList as jest.Mock).mockReturnValue({data: {results: movieList}, isLoading: false})

    const {getByTestId} = render(<HomeScreen />);
    await waitFor(() => expect(getByTestId('movie-list').children).toHaveLength(movieList.length));
  });
});
