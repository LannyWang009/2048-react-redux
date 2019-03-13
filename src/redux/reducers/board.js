import Matrix from '../actions'
const initialState = {
  board: [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
  score: 0,
  bestScore: 0,
  gameOver: false,
  isMoved: true
}

function deepCopy (x) {
  return JSON.parse(JSON.stringify(x))
}

const boardReducer = (state = initialState, action) => {
  let matrix = new Matrix(deepCopy(state))

  switch (action.type) {
    case 'ADD_NEW':
      const result = matrix.addNewNumber()
      return {
        ...state, ...result
      }

    case 'UP':
      const resultUp = matrix.moveUp()
      return {
        ...state, ...resultUp
      }

    case 'DOWN':
      const resultDown = matrix.moveDown()
      return { ...state, ...resultDown }

    case 'RIGHT':
      let resultRight = matrix.moveRight()
      console.log('result right', resultRight)
      return { ...state, ...resultRight }

    case 'LEFT':
      let resultLeft = matrix.moveLeft()
      return { ...state, ...resultLeft }

    case 'RESTART':
      let copy = JSON.parse(JSON.stringify(initialState))
      matrix = new Matrix(copy)
      const resultRestart = matrix.addNewNumber().addNewNumber()
      return { ...copy, ...resultRestart, bestScore: state.bestScore }

    case 'INIT':
      if (action.board) {
        return { ...state, ...action.board }
      }
      let resultI = matrix.addNewNumber().addNewNumber()
      return { ...state, ...resultI
      }
    default:
      return state
  }
}

export default boardReducer
