import Reactotron from 'reactotron-react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { reactotronRedux } from 'reactotron-redux'
import { ReactotronReactNative } from 'reactotron-react-native'

declare global {
  interface Console {
    tron: ReactotronReactNative;
  }
}

export default Reactotron
  .setAsyncStorageHandler!(AsyncStorage)
  .configure()
  .useReactNative()
  .use(reactotronRedux())
  .connect()

  console.tron = Reactotron
