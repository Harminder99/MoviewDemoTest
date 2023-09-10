import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {Background} from '../../components/Background';
import {HomeScreenNavigationProp} from '../../navigations/navigationTypes';
import {Movie} from '../../apis/api-types';
import MovieListItem from './components/movie-list-item';
import React from 'react';
import {setMovie} from '../../store/slices/movie-slice';
import {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {useMoviesList} from '../../apis/api-services';
import {useNavigation} from '@react-navigation/native';

function HomeScreen() {
  // Fetch movie data from a custom hook
  const movieData = useMoviesList();

  const navigation = useNavigation<HomeScreenNavigationProp>();
  const dispatch = useDispatch();

  const onClick = useCallback((item: Movie) => {
    // Dispatch an action to set the selected movie
    dispatch(setMovie(item));
    navigation.navigate('MovieDetail');
  },[]);

  if (movieData && movieData.error) {
    // Display error message if there is an error
    return (
      <View style={styles.containerView}>
        <Text testID="error-message">Error: {movieData.error.message}</Text>
      </View>
    );
  }

  if (
    movieData !== undefined &&
    movieData.data &&
    movieData.data?.results.length === 0 &&
    !movieData.isLoading
  ) {
    // Display an empty state message when there is no data
    return (
      <View style={styles.containerView}>
        <Text testID="no-movie-message">No movie available</Text>
      </View>
    );
  }

  return (
    <Background>
      {/* Check if movie data is still loading */}
      {movieData && movieData.isLoading ? (
        <View style={styles.containerView}>
          <ActivityIndicator testID="loading-indicator" size={'large'} />
        </View>
      ) : (
        <FlatList
          testID="movie-list"
          data={movieData ? movieData.data?.results ?? [] : []}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => (
            <MovieListItem
              item={item}
              index={index}
              onPress={onClick}
              testID={`list-item${index}`}
            />
          )}
          keyExtractor={item => item.id.toString()}
        />
      )}
    </Background>
  );
}

const styles = StyleSheet.create({
  containerView: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});

export default HomeScreen;
