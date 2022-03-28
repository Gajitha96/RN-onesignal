

import React,{useEffect} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import OneSignal from 'react-native-onesignal';





const App= () => {
  useEffect(()=>{
//OneSignal Init Code
OneSignal.setLogLevel(6, 0);
OneSignal.setAppId("a6dbd8e6-08f6-405c-8823-2a7a8517e966");
//END OneSignal Init Code


//Method for handling notifications opened
OneSignal.setNotificationOpenedHandler(notification => {
  console.log("OneSignal: notification opened:", notification);
});
  },[])

  return (
   <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
   <Text>
   Hello World
   </Text>
   </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
