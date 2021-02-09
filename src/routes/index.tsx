import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { navigationRef } from './rootNavigation'
import Home from '../screens/Home'
import Ride from '../screens/Ride'
import SignIn from '../screens/SignIn'
import Car from '../screens/steps/Car'
import Payment from '../screens/steps/Payment'
import Type from '../screens/steps/Type'

const { Navigator, Screen } = createStackNavigator()

export default function Routes() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="SignIn" component={SignIn} />
        <Screen name="Home" component={Home} />
        <Screen name="Type" component={Type} />
        <Screen name="Payment" component={Payment} />
        <Screen name="Car" component={Car} />
        <Screen name="Ride" component={Ride} />
      </Navigator>
    </NavigationContainer>
  )
}
