import React, { Component } from 'react'
import BoardContainer from './BoardContainer'
import Heading from '../components/Heading'

export default class GameContainer extends Component {
  render () {
    return (
      <div className='gameContainer container'>
        <Heading />
        <BoardContainer />
      </div>
    )
  }
}
