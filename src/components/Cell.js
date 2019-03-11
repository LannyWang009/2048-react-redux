import React, { Component } from 'react'
import { connect } from 'react-redux'

class Cell extends Component {
  constructor (props) {
    super(props)
    this.state = {
      board: props.board
    }
  }

  render () {
    return (
      <div className='cell'>  </div>
    )
  }
}

const mapStateToProps = (state) => (
  { board: state.board.board }
)

export default connect(mapStateToProps)(Cell)
