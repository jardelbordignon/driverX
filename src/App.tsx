import 'react-native-gesture-handler'
import React from 'react'
import { Provider as ReduxProvider } from 'react-redux'

import store from '@src/store'
import Routes from '@src/routes'

export default function App() {
  return (
    <ReduxProvider store={store}>
      <Routes />
    </ReduxProvider>
  )
}
