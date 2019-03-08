import React, { Component } from 'react'
import Scorecontainer from '../containers/GameContainer'

export default class Heading extends Component {
  render () {
    return (
      <div className='heading'>
        <h1 className='title'>2048</h1>
        <Scorecontainer />
      </div>
    )
  }
}
