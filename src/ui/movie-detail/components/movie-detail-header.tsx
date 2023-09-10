import * as React from 'react';

import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {description_color, sub_header} from '../../../utils/colors';

import FastImage from 'react-native-fast-image';
import {ImageBaseUrl} from '../../../apis/api-constants';
import {LargeText} from '../../../components/LargeText';
import {Movie} from '../../../apis/api-types';
import {getResponsiveFontSize} from '../../../utils/typography';

export interface MovieDetailHeaderProps {
  movie: Movie;
}

export function MovieDetailHeader({movie}: MovieDetailHeaderProps) {
  return (
    <View>
      <View style={styles.horizontalContainer}>
        <FastImage
          testID="movie-poster"
          style={styles.imageView}
          source={{uri: `${ImageBaseUrl}${movie?.poster_path}`}}
          resizeMode={FastImage.resizeMode.cover}
        />

        <View style={styles.verticalRatingView}>
          <Text testID="vote-count" style={styles.voteCountTxt}>
            Votes: {movie?.vote_count ?? 0}
          </Text>
          <Text style={styles.voteAvgTxt}>
            Avg.: {movie?.vote_average ?? 0}/10
          </Text>
          <Text style={styles.releaseTxt}>
            Release: {movie?.release_date ?? 0}
          </Text>
          <View style={styles.btnBottomContainer}>
            <TouchableOpacity
              testID="add-to-favorites-button"
              style={styles.btnContainer}>
              <Text style={styles.voteTitleTxt}>Add to Favorites</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <LargeText
        testID="movie-description"
        style={styles.descriptionTxt}
        btnTxtStyle={styles.showMoreTxt}
        text={movie?.overview ?? ''}
        viewStyle={{marginTop: 20}}
      />

      <Text testID="trailers-section-title" style={styles.trailerTxt}>
        {'TRAILERS'}
      </Text>
      <View style={styles.viewSpace} />
    </View>
  );
}

const styles = StyleSheet.create({
  horizontalContainer: {
    flexDirection: 'row',
  },
  verticalRatingView: {
    flex: 0.8,
    paddingLeft: 20,
  },
  imageContainer: {
    flex: 0.4,
    height: Dimensions.get('screen').width / 2,
  },
  imageView: {
    flex: 0.4,
    height: Dimensions.get('screen').width / 2,
  },
  btnBottomContainer: {
    position: 'absolute',
    bottom: 0,
    left: 20,
    width: '100%',
  },
  btnContainer: {
    width: '100%',
    marginTop: 10,
    alignItems: 'center',
    padding: 15,
    justifyContent: 'center',
    backgroundColor: sub_header,
  },
  voteTitleTxt: {
    fontSize: getResponsiveFontSize(15),
    fontWeight: '500',
    color: '#FFFF',
  },
  voteCountTxt: {
    fontSize: getResponsiveFontSize(18),
    fontWeight: '500',
  },
  voteAvgTxt: {
    fontSize: getResponsiveFontSize(13),
    marginTop: 5,
    fontWeight: '400',
  },
  releaseTxt: {
    fontSize: getResponsiveFontSize(13),
    marginTop: 5,
    fontWeight: '400',
  },
  descriptionTxt: {
    color: description_color,
    fontSize: getResponsiveFontSize(14),
    fontWeight: '500',
  },
  showMoreTxt: {
    fontSize: getResponsiveFontSize(14),
  },
  trailerTxt: {
    marginTop: 20,
    color: description_color,
    fontSize: getResponsiveFontSize(15),
    fontWeight: '500',
  },
  viewSpace: {
    height: 1,
    width: '100%',
    backgroundColor: '#dbdbdb',
    marginVertical: 2,
  },
});
