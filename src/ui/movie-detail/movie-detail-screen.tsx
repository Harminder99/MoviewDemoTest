import * as React from 'react';

import {FlatList, StyleSheet, Text, View} from 'react-native';
import {description_color, sub_header} from '../../utils/colors';

import {Background} from '../../components/Background';
import {MovieDetailHeader} from './components/movie-detail-header';
import {MovieTrailerItem} from './components/movie-trailer-item';
import {RootState} from '../../store/store';
import { getResponsiveFontSize } from '../../utils/typography';
import {useSelector} from 'react-redux';

function MovieDetailScreen() {
  const {movie} = useSelector((state: RootState) => state.movie);

  return (
    <Background>
      <View style={styles.subHeader}>
        <Text testID="movie-title" style={styles.subHeaderTitle}>
          {movie?.title ?? ''}
        </Text>
      </View>

      <View style={styles.bodyContainer}>
        <FlatList
          data={[1, 2, 3]}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          ListHeaderComponent={movie && <MovieDetailHeader movie={movie} />}
          renderItem={MovieTrailerItem}
          keyExtractor={item => item.toString()}
        />
      </View>
    </Background>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  subHeader: {
    backgroundColor: sub_header,
    height: 50,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  subHeaderTitle: {
    fontWeight: '500',
    fontSize: getResponsiveFontSize(18),
    color: '#FFFFFF',
  },
  bodyContainer: {
    flex: 1,
    margin: 20,
  },
  descriptionTxt: {
    marginTop: 20,
    color: description_color,
    fontSize: getResponsiveFontSize(14),
    fontWeight: '500',
  },
  trailerTxt: {
    marginTop: 20,
    color: description_color,
    fontSize: getResponsiveFontSize(15),
    fontWeight: '500',
    borderBottomWidth: 1,
    borderBottomColor: '#56FF',
  },
  viewSpace: {
    height: 1,
    width: '100%',
    backgroundColor: '#dbdbdb',

    marginVertical: 2,
  },
});
export default MovieDetailScreen;
