import React, { Component } from 'react'
import BoardContainer from './BoardContainer'
import { connect } from 'react-redux'

// import Heading from '../components/Heading'
export class GameContainer extends Component {
  constructor (props) {
    super(props)

    this.state = {
      board: props.board
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
        <p>Use arrow keys to join squares to make 2048</p>
        <div className='gameHeader'>
          <button className='button is-warning' onClick={this.handleRestart}>New Game</button> <button className='button is-info is-outlined'>Score:</button> <button className='button is-info is-outlined'>Best Score:</button>
        </div>
        <BoardContainer />
      </div>
    )
  }
}

const mapStateToProps = (state) => (
  { board: state.board.board, score: state.board.score, bestScore: state.board.bestScore }
)

const mapDispatchToProps = (dispatch) => ({
  setNewGame: () => dispatch({ type: 'RESTART' })
})

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer)
