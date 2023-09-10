import RootStackParamList from './types';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

// Define navigation types for screens in the MainStack
export type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Home'
>;

export type MovieDetailScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'MovieDetail'
>;

