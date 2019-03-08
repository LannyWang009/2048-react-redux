import React, { Component } from 'react'
import GameContainer from '../containers/GameContainer'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <p>
           2048 Game
          </p>
        </header>
        <GameContainer />
      </div>
    )
  }
}

export default App
