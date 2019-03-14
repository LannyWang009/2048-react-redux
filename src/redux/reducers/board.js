
const initialState = {
  board: [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]
  // score: 0,
  // bestScore: 0,
  // gameOver: false,
  // isMoved: true
}

// ============================================================================
// -PURE FUNCTIONS THAT CHANGE THE BOARD-
// ============================================================================

function deepCopy (x) {
  return JSON.parse(JSON.stringify(x))
}

function getBlankCordinates (board) {
  // this takes in this.state.board, returns an array of blank coordinates
  const blankCoordinates = []
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].length; col++) {
      if (board[row][col] === 0) { blankCoordinates.push([row, col]) }
    }
  }
  return blankCoordinates
}

function getRandomNumber (arr) {
  // it returns a random index in the array
  let r = Math.floor(Math.random() * arr.length)
  return arr[r]
}

function addNewNumber (board) {
  const newboard = deepCopy(board)
  const emptyCordinates = getBlankCordinates(board)
  const cor = getRandomNumber(emptyCordinates)
  newboard[cor[0]][cor[1]] = 2
  return newboard
}

function shiftRowLeft (row) {
  let arr = row.filter(val => val)
  let missing = row.length - arr.length
  let zeros = Array(missing).fill(0)
  arr = arr.concat(zeros)
  return arr
}

function shiftMatrixLeft (board) {
  const newboard = []
  for (let col = 0; col < board.length; col++) {
    let row = board[col]
    let newrow = shiftRowLeft(row)
    newboard.push(newrow)
  }
  return newboard
}

function shiftRowRight (row) {
  let arr = row.filter(val => val)
  let missing = row.length - arr.length
  let zeros = Array(missing).fill(0)
  arr = zeros.concat(arr)
  return arr
}

function shiftMatrixRight (board) {
  let newboard = []
  for (let col = 0; col < board.length; col++) {
    let row = board[col]
    let newrow = shiftRowRight(row)
    newboard.push(newrow)
  }
  return newboard
}

// ===========================================
// -REDUCER-
// ===========================================

const boardReducer = (state = initialState, action) => {
  const stateCopy = deepCopy(state)
  let board = stateCopy.board
  switch (action.type) {
    case 'ADD_NEW':
      const result = addNewNumber(board)
      return { board: result }

    case 'TEST_NUMBERS':
      const result2048 = [[2, 4, 8, 16], [32, 64, 128, 256], [512, 1024, 2048, 0], [2, 4, 8, 16]]
      return {
        board: result2048
      }
      // case 'UP':
      //   const resultUp = matrix.moveUp()
      //   return {
      //     ...state, ...resultUp
      //   }

      // case 'DOWN':
      //   const resultDown = matrix.moveDown()
      //   return { ...state, ...resultDown }

      // case 'RIGHT':
      //   let resultRight = matrix.moveRight()
      //   console.log('result right', resultRight)
      //   return { ...state, ...resultRight }

      // case 'LEFT':
      //   let resultLeft = matrix.moveLeft()
      //   return { ...state, ...resultLeft }

      // case 'RESTART':
      //   let copy = JSON.parse(JSON.stringify(initialState))
      //   matrix = new Matrix(copy)
      //   const resultRestart = matrix.addNewNumber().addNewNumber()
      //   return { ...copy, ...resultRestart, bestScore: state.bestScore }

    // case 'INIT':
    //   if (action.board) {
    //     return { ...state, ...action.board }
    //   }
    //   let resultI = matrix.addNewNumber().addNewNumber()
    //   return { ...state, ...resultI
    //   }
    default:
      return state
  }
}

export default boardReducer
