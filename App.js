import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import { 
  Font, 
  AppLoading, 
  Asset, 
} from 'expo';

import Splash from './app/Splash'; 
import Login from './app/Login'; 


export default class App extends Component{
  state = {
    isLoadingComplete: false,
  };


  _loadResourcesAsync = async () => {
    return Promise.all([
      Font.loadAsync({
        'Graphik-Medium': require('./assets/fonts/Graphik-Medium.ttf'),
        'Graphik-Regular': require('./assets/fonts/Graphik-Regular.ttf'),
        'Graphik-Semibold': require('./assets/fonts/Graphik-Semibold.ttf'),
      })
    ]);
  };
  
  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };
  
  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };

  render(){
    return (
      <View style={{flex:1}}>
        <RootNavigator />
      </View>
    )
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <View style={{flex:1}}>
          <RootNavigator />
        </View>
      );
    }
  }

}

const RootNavigator = StackNavigator(
  {
    Splashs: {
      screen: Splash,
    },
    Logins: {
      screen: Login,
    },
  },

  {
    index: 0,
    initialRouteName: 'Logins',
    navigationOptions: {
      gesturesEnabled: false
    }
  }

);



