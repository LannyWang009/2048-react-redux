import React, { Component } from 'react'
import GameContainer from '../containers/GameContainer'
import { connect } from 'react-redux'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      board: props.board,
      score: props.score
    }
    this.handler = this.handler.bind(this)
  }

  handler (event) {
    // console.log(event.key)
    if (event.key === 'ArrowUp') {
      console.log(this.props.board)
      console.log(event.key)
      this.props.addRandomSquare(this.state.board)
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
  score: () => dispatch({ type: 'ADD_NEW' })
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
