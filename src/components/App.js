import React, { Component } from 'react'
import GameContainer from '../containers/gameContainer'
import { connect } from 'react-redux'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      board: props.board
    }
    this.handler = this.handler.bind(this)
  }

  handler (event) {
    // console.log(event.key)
    if (event.key === 'Alt') {
      console.log('===========================')
      this.props.testBoard()
    }
    if (event.key === 'ArrowUp') {
      // console.log(this.props.board)
      console.log('===========================')
      console.log('you just pressed', event.key)
      this.props.moveUp()
    }
    if (event.key === 'ArrowRight') {
      console.log('===========================')
      console.log('you just pressed', event.key)
      this.props.moveRight()
    }
    if (event.key === 'ArrowDown') {
      console.log('===========================')
      console.log('you just pressed', event.key)
      this.props.moveDown()
    }
    if (event.key === 'ArrowLeft') {
      console.log('===========================')
      console.log('you just pressed', event.key)
      this.props.moveLeft()
    }
    if (event.key === 'Enter') {
      console.log('===========================')
      console.log('you just pressed', event.key)
      this.props.addRandomSquare()
    }
  }

  render () {
    return (
      <div className='App' tabIndex='0' onKeyDown={this.handler}>
        <header className='App-header'>
          <p>
           2048 Game
          </p>
        </header>
        <GameContainer />
      </div>
    )
  }
}

const mapStateToProps = (state) => (
  { board: state.board.board, score: state.board.score }
)

const mapDispatchToProps = (dispatch) => ({
  addRandomSquare: () => dispatch({ type: 'ADD_NEW' }),
  testBoard: () => dispatch({ type: 'TEST_NUMBERS' }),
  moveRight: () => dispatch({ type: 'RIGHT' }),
  moveLeft: () => dispatch({ type: 'LEFT' }),
  moveUp: () => dispatch({ type: 'UP' }),
  moveDown: () => dispatch({ type: 'DOWN' })

  // setNewGame: () => dispatch({ type: 'RESTART' })

})

export default connect(mapStateToProps, mapDispatchToProps)(App)
