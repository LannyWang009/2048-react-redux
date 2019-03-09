import React, { Component } from 'react'
import BoardContainer from './BoardContainer'

// import Heading from '../components/Heading'

export default class GameContainer extends Component {
  render () {
    return (
      <div className='gameContainer container'>
        <h5>Below is game container</h5>
        <div>
          This is the score board
        </div>
        <BoardContainer />
      </div>
    )
  }
}
