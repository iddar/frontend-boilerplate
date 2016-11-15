const styles = require('./style.css')

import ReactDOM from 'react-dom'
import React from 'react'
import App from './App'
import { AppContainer } from 'react-hot-loader'

ReactDOM.render(
  <AppContainer component={App} />,
  document.getElementById('app')
)

if (module.hot) {
  module.hot.accept('./App', function () {
    return ReactDOM.render(
      <AppContainer component={App} />,
      document.getElementById('app')
    )
  })
}
