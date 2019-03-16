import React, { Component } from 'react'
import BoardContainer from './BoardContainer'
import { connect } from 'react-redux'
import GameOverMessage from '../components/GameOverMessage'

// import Heading from '../components/Heading'
export class GameContainer extends Component {
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
    return (
      <div className='gameContainer container'>

        <div className='gameHeader'>
          <button className='button is-danger' onClick={this.handleRestart}>New Game</button> <span className='button is-primary is-outlined'>Score: {this.props.score}</span>
        </div>
        <GameOverMessage />

        <BoardContainer />
      </div>
    )
  }
}

const mapStateToProps = (state) => (
  { board: state.board.board, score: state.board.score, gameOverMessage: state.board.gameOverMessage }
)

const mapDispatchToProps = (dispatch) => ({
  setNewGame: () => dispatch({ type: 'RESTART' })
})

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer)
