import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
} from 'react-native';

export default class Splash extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on  sadas your app!</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});