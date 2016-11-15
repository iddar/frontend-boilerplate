import React, { Component } from 'react'

class App extends Component {
  constructor () {
    super()
    this.state = {
      count: 400
    }
  }

  render () {
    return (
      <div>
        <div onClick={() => (
           this.setState((e) => (
             {count: e.count + 1}
           ))
        )}>Hola </div>
        <div>Couddnt: {this.state.count}</div>
      </div>
    )
  }
}

export default App
