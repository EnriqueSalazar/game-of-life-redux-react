// Initialize store with devTools and defined reducers.
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from '../reducers'
// import DevTools from '../containers/DevTools'
import apollo from '../apolloClient'

const configureStore = (preloadedState) => {
  const DEBUG =
  process.env.NODE_ENV === 'development'
  const middleware = [
    thunk,
    DEBUG && createLogger(), apollo.middleware()
  ].filter(Boolean)
  const composeEnhancers =
  (DEBUG && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose
  const store = createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(
      applyMiddleware(...middleware)
    ),
     window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()
  )

  // if (module.hot) {
  //   // Enable Webpack hot module replacement for reducers
  //   module.hot.accept('../reducers', () => {
  //     const nextRootReducer = require('../reducers/index')
  //     store.replaceReducer(nextRootReducer)
  //   })
  // }

  return store
}

export default configureStore
