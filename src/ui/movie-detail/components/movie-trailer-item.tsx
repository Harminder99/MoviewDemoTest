import * as React from 'react';

import {Image, StyleSheet, Text, View} from 'react-native';

import {background_playlist_color} from '../../../utils/colors';

export function MovieTrailerItem({index}: {index: number}) {
  return (
    <View style={styles.horizontalContainer}>
      <Image
        testID={`play-trailer-${index + 1}`}
        style={styles.playIcon}
        source={require('../../../assets/images/play-circle.png')}
      />
      <Text testID={`trailer-title-${index + 1}`} style={styles.titleTxt}>
        Play Trailer {index + 1}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  horizontalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginVertical: 5,
    backgroundColor: background_playlist_color,
  },
  playIcon: {
    width: 20,
    height: 20,
  },
  titleTxt: {
    marginLeft: 10,
  },
});
