import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './Home'
import Ride from './Ride'
import SignIn from './SignIn'
import Car from './steps/Car'
import Payment from './steps/Payment'
import Type from './steps/Type'

const { Navigator, Screen } = createStackNavigator()

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="Home" component={Home} />
        <Screen name="Car" component={Car} />
        <Screen name="Ride" component={Ride} />
        <Screen name="SignIn" component={SignIn} />
        <Screen name="Payment" component={Payment} />
        <Screen name="Type" component={Type} />
      </Navigator>
    </NavigationContainer>
  )
}
