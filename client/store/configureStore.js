// Initialize store with devTools and defined reducers.
import {createStore, compose} from 'redux'
import rootReducer from '../reducers'
// import DevTools from '../containers/DevTools'

const configureStore = (preloadedState) => {
  const DEBUG =
  process.env.NODE_ENV === 'development'
  const store = createStore(
    rootReducer,
    preloadedState,
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
