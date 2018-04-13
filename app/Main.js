import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation';
import List from './List';

class MainPage extends React.Component {
  render() {
    return (
      <View style={{flex:1}}>
        <List />
      </View>
    );
  }
}


export default TabNavigator({
  Main: {
    screen: MainPage,
  },
});
