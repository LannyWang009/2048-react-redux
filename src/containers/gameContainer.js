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
      direction: props.direction,
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
          <button className='button is-danger' onClick={this.handleRestart}>New Game</button> 
          <a>
            <span class="icon is-primary is-large is-outlined">
              <i class={this.props.direction}></i>
            </span>
          </a>
          <button className='button is-light is-outlined' disabled>Score: {this.props.score}</button>
        </div>
        <GameOverMessage />

        <BoardContainer />
      </div>
    )
  }
}

const mapStateToProps = (state) => (
  { board: state.board.board, score: state.board.score, gameOverMessage: state.board.gameOverMessage, direction: state.board.direction }
)

const mapDispatchToProps = (dispatch) => ({
  setNewGame: () => dispatch({ type: 'RESTART' })
})

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer)
