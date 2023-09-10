import * as React from 'react';

import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

export interface LargeTextProps {
  text: String;
  style?: StyleProp<TextStyle> | undefined;
  btnTxtStyle?: StyleProp<TextStyle> | undefined;
  viewStyle?: StyleProp<ViewStyle> | undefined;
  maxCount?: number;
  testID?: string;
}

export function LargeText({
  text,
  style,
  btnTxtStyle,
  viewStyle,
  maxCount = 300,
  testID,
}: LargeTextProps) {
  const [showMore, setShowMore] = React.useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const renderText = () => {
    if (showMore) {
      return (
        <Text style={style}>
          {text}
          <TouchableOpacity onPress={toggleShowMore}>
            <Text style={btnTxtStyle}> Show less</Text>
          </TouchableOpacity>
        </Text>
      );
    } else {
      // You can adjust the length of the truncated text as needed.
      const truncatedText = text.slice(0, maxCount);

      return (
        <Text style={[style]}>
          {truncatedText}
          {maxCount < text.length && (
            <TouchableOpacity style={styles.btn} onPress={toggleShowMore}>
              <Text style={[btnTxtStyle]}>... Show more</Text>
            </TouchableOpacity>
          )}
        </Text>
      );
    }
  };

  return (
    <View style={[viewStyle]} testID={testID}>
      {renderText()}
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    marginBottom: -3,
  },
});
