/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

import {AppNavigator} from './src/navigations/AppNavigator';
import {Provider} from 'react-redux';
import React from 'react';
import store from './src/store/store';

const queryClient = new QueryClient();
export default function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <AppNavigator />
      </QueryClientProvider>
    </Provider>
  );
}
