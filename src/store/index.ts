import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './modules/rootReducer'
import rootSaga from './modules/rootSaga'
import Reactotron from '../config/Reactotron'

// saga middleware vai interceptar as actions
const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(sagaMiddleware),
    Reactotron.createEnhancer!()
  )
)

sagaMiddleware.run(rootSaga)

export default store
