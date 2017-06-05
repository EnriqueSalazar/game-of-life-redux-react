
import React from 'react'
import ReactDOM from 'react-dom'
import {AppContainer} from 'react-hot-loader'
import injectTapEventPlugin from 'react-tap-event-plugin'

import App from './App'
import './index.css'
injectTapEventPlugin()

ReactDOM.render(
  <AppContainer>
    <App />
  </AppContainer>
  , document.getElementById('root'))

    // Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default
    ReactDOM.render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
          document.getElementById('root')
        )
  })
}
