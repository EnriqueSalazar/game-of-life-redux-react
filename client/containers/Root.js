// initializes the router

import React from 'react'
import PropTypes from 'prop-types'
// import {Provider} from 'react-redux'

import routes from '../routes'
// import DevTools from './DevTools'
import {Router} from 'react-router'

const Root = ({history}) => (
  <Router history={history} routes={routes} />
)

Root.propTypes = {
  history: PropTypes.object.isRequired
}

export default Root
