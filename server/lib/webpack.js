'use strict'

const express = require('express')

const webpack = require('webpack')
const webpackMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const webpackConfig = require('../../webpack.config')

const router = express.Router()

if (process.env.NODE_ENV === 'development') {
  console.log( // eslint-disable-line no-console
    'Starting Middleware',
    webpackConfig.output.publicPath
  )
  const compiler = webpack(webpackConfig)
  router.use(webpackMiddleware(compiler, {
    noInfo: true,
    hot: true,
    publicPath: webpackConfig.output.publicPath,
    stats: {
      colors: true
    }
  }))
  router.use(webpackHotMiddleware(compiler))
}

module.exports = {
  router: router
}
