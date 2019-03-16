import React, { Component } from 'react'
import { connect } from 'react-redux'

class GameOverMessage extends Component {
  constructor (props) {
    super(props)

    this.state = {
      board: props.board,
      score: props.score,
      gameOverMessage: props.gameOverMessage
    }
    this.handleRestart = this.handleRestart.bind(this)
  }

  handleRestart () {
    console.log('you pressed new game')
    this.props.setNewGame()
  }

  render () {
    if (this.state.gameOverMessage) {
      return (
        <div className='gameOverMessage notification is-danger'>
          <button className='delete' onClick={this.handleRestart} />
          {this.props.gameOverMessage}
        </div>
      )
    } else { return null }
  }
}

const mapStateToProps = (state) => (
  { board: state.board.board, score: state.board.score, gameOverMessage: state.board.gameOverMessage }
)

const mapDispatchToProps = (dispatch) => ({
  setNewGame: () => dispatch({ type: 'RESTART' })
})

export default connect(mapStateToProps, mapDispatchToProps)(GameOverMessage)
