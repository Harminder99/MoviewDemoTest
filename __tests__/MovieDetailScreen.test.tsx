import {cleanup, render, waitFor} from '@testing-library/react-native';

import { Movie } from '../src/apis/api-types';
import {MovieDetailHeader} from '../src/ui/movie-detail/components/movie-detail-header'; // Import MovieDetailHeader from the same file
import MovieDetailScreen from '../src/ui/movie-detail/movie-detail-screen';
import React from 'react';

// Mock Redux store and useSelector
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

// Mock a sample movie data for testing
const sampleMovie:Movie = {
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
};

describe('MovieDetailScreen', () => {
  beforeEach(() => {
    // Mock useSelector to return the sample movie data
    jest
      .spyOn(require('react-redux'), 'useSelector')
      .mockImplementation(() => ({
        movie: sampleMovie,
      }));
  });
  afterEach(cleanup);

  it('should render movie title correctly', async () => {
    const {getByTestId} = render(<MovieDetailScreen />);
    const titleElement = getByTestId('movie-title');

    // Wait for the component to finish rendering
    await waitFor(() => {
      const actualText = titleElement.props.children;
      const expectedText = sampleMovie.title;

      expect(actualText).toBe(expectedText);
    });
  });

});

describe('MovieDetailHeader', () => {
  it('renders correctly', () => {
    const tree = render(<MovieDetailHeader movie={sampleMovie} />);
    expect(tree).toMatchSnapshot();
  });
  
  it('should render movie poster correctly', () => {
    const {getByTestId} = render(<MovieDetailHeader movie={sampleMovie} />);
    const posterElement = getByTestId('movie-poster');
    expect(posterElement).toBeTruthy();
  });

  it('should render movie description correctly', async () => {
    const {queryByText, getByTestId} = render(
      <MovieDetailHeader movie={sampleMovie} />,
    );
    await waitFor(() => {
      const expectedText = sampleMovie.overview;
      const descriptionText = queryByText(expectedText);
      expect(descriptionText?.children).toEqual([expectedText]);
    });
  });
});
