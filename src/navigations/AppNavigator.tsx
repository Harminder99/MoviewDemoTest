import * as React from 'react';

import {HomeScreen} from '../ui/home';
import {MovieDetailScreen} from '../ui/movie-detail';
import {NavigationContainer} from '@react-navigation/native';
import RootStackParamList from './types';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator<RootStackParamList>();
export function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            title: 'Pop Movies',
          }}
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          options={{
            title: 'Movie Details',
            headerBackTitle: ' ',
          }}
          name="MovieDetail"
          component={MovieDetailScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
