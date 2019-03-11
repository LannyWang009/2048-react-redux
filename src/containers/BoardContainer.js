import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'


class BoardContainer extends Component {
  // static propTypes = {
  //   board:PropTypes.arrayOf(propTypes.array).isRequired
  // }

  constructor (props) {
    super(props)
    this.state = {
      board: props.board
    }
  }

  render () {
    return (
      <div className='gameBoard'>
        {this.props.board.map((row, i) => (
          <div key={i} className='row'>
            {row.map((col, j) => (
              <span key={j} className={'cell block-value-' + this.props.board[i][j]}>{this.props.board[i][j]}</span>
            ))}
          </div>
        ))}
      </div>
    )
  }
}

const mapStateToProps = (state) => (
  { board: state.board.board }
)

export default connect(mapStateToProps)(BoardContainer)
