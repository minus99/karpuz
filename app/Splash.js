import React from 'react';
import { 
  Text, 
  View, 
  AsyncStorage
} from 'react-native';
import { Permissions, Notifications } from 'expo';


styles = require('./styles.js');

export default class Splash extends React.Component {

  componentWillMount(){
    registerForPushNotificationsAsync();
    _loadInitialState(this._routeAccordingToAsyncStorage);
  }

  _routeAccordingToAsyncStorage = (answer) => {
    if(answer == 'no')
    {
      console.log('sadasdasdasd', answer)
      this.props.navigation.navigate('Logins');
    }
    else {
      var loginInfo = answer.split('|');

      console.log(loginInfo)
    }
  }


  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on  sadas your app!</Text>
      </View>
    );
  }
}

async function _loadInitialState(callback){
  var answer = '';
  try {
    const value = await AsyncStorage.getItem('@loginInformation');
    if (value !== null) {
      console.log('there is storage >>>>>>');
      answer = value;
     } else {
       answer = 'no';
       console.log('there is no asyncccc');
     }
   } catch (error) {
     console.log(error + 'hola');
   }
   callback(answer)
}

async function registerForPushNotificationsAsync() {

  const { status: existingStatus } = await Permissions.getAsync(
    Permissions.NOTIFICATIONS
  );
  let finalStatus = existingStatus;

  

  // only ask if permissions have not already been determined, because
  // iOS won't necessarily prompt the user a second time.
  if (existingStatus !== 'granted') {
    // Android remote notification permissions are granted during the app
    // install, so this will only ask on iOS
    const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    finalStatus = status;
  }

  // Stop here if the user did not grant permissions
  if (finalStatus !== 'granted') {
    return;
  }

  // Get the token that uniquely identifies this device
  let token = await Notifications.getExpoPushTokenAsync();

  console.log(token)
}