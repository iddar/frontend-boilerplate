/* global requestAnimationFrame */

import 'react-hot-loader/patch'
const styles = require('./style.css')

import ReactDOM from 'react-dom'
import React from 'react'
import App from './App'
import { AppContainer } from 'react-hot-loader'

console.log('👾 Initial load')

function init () {
  let App = require('./App').default
  ReactDOM.render((
    <AppContainer>
      <App />
    </AppContainer>
  ), document.getElementById('app'))
}

init()

if (module.hot) {
  console.log('🔥 HOT reload active')
  module.hot.accept(
    './App',
    () => requestAnimationFrame(() => {
      flushLogs()
      init()
    }))

  let log = console.log
  let logs = []
  console.log = (t, ...args) => {
    if (typeof t === 'string' && t.match(/^\[(HMR|WDS)\]/)) {
      if (t.match(/(up to date|err)/i)) logs.push(t.replace(/^.*?\]\s*/m, ''), ...args)
    } else {
      log.call(console, t, ...args)
    }
  }
  let flushLogs = () => console.log(`%c🚀 ${logs.splice(0, logs.length).join(' ')}`, 'color:#888;')
}
