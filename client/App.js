import React from 'react'
import {Provider} from 'react-redux'
import {Grid} from 'react-flexbox-grid'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import configureStore from './store/configureStore'
import Main from './containers/Main'

const App = () => (
  <Provider store={configureStore({})}>
    <MuiThemeProvider>
      <Grid
        fluid style={{
          padding: 0
        }}>
        <Main />
      </Grid>
    </MuiThemeProvider>
  </Provider>
)
export default App
