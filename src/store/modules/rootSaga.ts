import { all } from 'redux-saga/effects'

import app from './app/sagas'

// semelhante ao async await
export default function* rootSaga() {
  return yield all([app])
}
