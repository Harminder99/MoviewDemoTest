import * as React from 'react';

import {Dimensions, Pressable, StyleSheet} from 'react-native';

import FastImage from 'react-native-fast-image';
import {ImageBaseUrl} from '../../../apis/api-constants';
import {Movie} from '../../../apis/api-types';

export interface MovieListItemProps {}

const MovieListItem = ({
  item,
  index,
  onPress,
  testID, 
}: {
  item: Movie;
  index: number;
  onPress: (item: Movie) => void;
  testID: string; 
}) => {
  return (
    <Pressable
      style={styles.container}
      onPress={() => onPress(item)}
      testID={testID}>
      <FastImage
        style={styles.item}
        source={{uri: `${ImageBaseUrl}${item.poster_path}`}}
        resizeMode={FastImage.resizeMode.cover}
      />
    </Pressable>
  );
};

export default MovieListItem;

const styles = StyleSheet.create({
  container: {
    width: '50%',
    height: Dimensions.get('screen').width / 1.6,
  },
  item: {
    width: '100%',
    height: '100%',
  },
});
