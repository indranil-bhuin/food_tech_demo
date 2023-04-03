import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { colors } from './assets/colors';
import SplashScreen from './src/screens/SplashScreen';
import LoginScreen from './src/screens/LoginScreen';
import { Provider } from 'react-redux';
import store from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <LoginScreen />
    </Provider>
  )
}

export default App;

