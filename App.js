import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Splash from './app/Splash.js'; 


export default StackNavigator({
  Home: {
    screen: Splash,
  },
});
