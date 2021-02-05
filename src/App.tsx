import React from 'react'
import {SafeAreaView, StatusBar} from 'react-native'

import SignIn from '@src/screens/SignIn'
import Car from '@src/screens/steps/Car'
import Payment from '@src/screens/steps/Payment'
import Type from '@src/screens/steps/Type'

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
        <Type />
      </SafeAreaView>
    </>
  )
}
