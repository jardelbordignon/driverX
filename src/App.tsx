import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import SignIn from '@src/screens/SignIn';

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
        <SignIn />
      </SafeAreaView>
    </>
  );
}
