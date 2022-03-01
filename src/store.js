import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from '@redux-devtools/extension'

import calculatorReducer from './reducers'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(
  calculatorReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
)

sagaMiddleware.run(rootSaga)
store.subscribe(() => console.log(store.getState()))