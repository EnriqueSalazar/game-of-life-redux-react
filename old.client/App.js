import React from 'react'
import {
  ApolloProvider} from 'react-apollo'
import {Grid} from 'react-flexbox-grid'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import apollo from './apolloClient'
import routes from './routes'
import configureStore from './store/configureStore'

const App = () => (
  <ApolloProvider store={configureStore({})} client={apollo}>
    <MuiThemeProvider>
      <Grid
        fluid style={{
          padding: 0
        }}>
        {routes}
      </Grid>
    </MuiThemeProvider>
  </ApolloProvider>
)
export default App
