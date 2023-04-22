import React from 'react';
import { StatusBar } from 'expo-status-bar';
import AppNavigation from './navigation/appNavigation';
import messaging from "@react-native-firebase/messaging"
import { Alert } from 'react-native';
export default function App() {
  messaging().getToken().then(token=>{
    console.log(token)
  })
  .catch(e=>{
    console.log(e)
  })
  messaging().onMessage(async remoteMessage => {
    Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
  });
  return (
    <AppNavigation />
  );
}

