import React from 'react';
import { Text, View, TextInput, Button } from 'react-native';

global = require('./global.js');

class UselessTextInput extends React.Component {
  render() {
    return (
      <TextInput
        {...this.props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
        editable = {true}
        maxLength = {40}
      />
    );
  }
}

export default class Login extends React.Component {

  static navigationOptions = {
    title: 'Karpuz',
    headerStyle:{ backgroundColor: '#377BCE' },
    headerTitleStyle:{ color: '#ffffff'},
    headerLeft: null,
  }

  constructor(props) {
    super(props);
    this.state = {
      text1: 'kullanıcı adı',
      text2: 'şifre',
      user: null,
      pass: null,
      isLoading: false,
      message: '',
      stateLoaded:false,
    };
  }

  onPressLearnMore(){
    this.props.navigation.navigate('Main');
  }

  render() {
    return (
      <View>
        <UselessTextInput placeholder={this.state.text1} />
        <UselessTextInput placeholder={this.state.text2} secureTextEntry={true} />
        <Button
        onPress={this.onPressLearnMore.bind(this)}
        title="Login"
        color="#841584"
      />

      </View>
    );
  }
}