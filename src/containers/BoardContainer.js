import React, { Component } from 'react'
import Row from '../components/Row'

export default class BoardContainer extends Component {
  render () {
    return (
      <div className='boardContainer'>
        <h5>Below is the boardcontainer</h5>
        <Row />
        <Row />
        <Row />
        <Row />
      </div>
    )
  }
}
