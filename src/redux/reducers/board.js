import Matrix from '../actions'
const initialState = {
  board: [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
  score: 0,
  bestScore: 0,
  gameOver: false,
  isMoved: true
}

const boardReducer = (state = initialState, action) => {
  let matrix = new Matrix(state)

  switch (action.type) {
    case 'ADD_NEW':
      let result = matrix.addNewNumber()
      return {
        ...state, ...result
      }
    case 'RESTART':
      // let newboard = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]
      return initialState
    default:
      return state
  }
}

export default boardReducer
