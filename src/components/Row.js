import React, { Component } from 'react'
import Cell from './Cell'

export default class Row extends Component {
  render () {
    return (
      <div className='row'>
        <Cell /><Cell /><Cell /><Cell />
      </div>
    )
  }
}
