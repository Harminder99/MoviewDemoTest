import * as React from 'react';

import {StyleSheet, View, ViewProps} from 'react-native';

export interface BackgroundProps extends ViewProps {
  // You can define any additional props you want for the container
  backgroundColor?: string;
}

export function Background({children, ...props}: BackgroundProps) {
  return (
    <View style={styles.container} {...props}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});
