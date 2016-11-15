import React, { Component } from 'react'
import styles from './style.css'

class App extends Component {
  constructor () {
    super()
    this.state = {
      count: 100
    }
  }

  render () {
    return (
      <div>
        <div onClick={() => (
           this.setState((e) => (
             {count: e.count + 1}
           ))
        )}>HOT reload works and styles reload</div>
        <div className={styles.color}>Clic counter: {this.state.count}</div>
      </div>
    )
  }
}

export default App
