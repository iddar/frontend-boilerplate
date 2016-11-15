import React, { Component } from 'react'

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
        )}>HOT reload works</div>
        <div>count: {this.state.count}</div>
      </div>
    )
  }
}

export default App
