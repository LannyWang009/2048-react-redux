
const initialState = {
  board: [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
  score: 0,
  // bestScore: 0,
  gameOver: false
  // isMoved: true
}

// ============================================================================
// -PURE FUNCTIONS THAT CHANGE THE BOARD-
// ============================================================================

function isMoved (oldboard, newboard) {
  if (JSON.stringify(oldboard) === JSON.stringify(newboard)) {
    return false
  } else {
    return true
  }
}
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

// function mergeRow2Right (row) {
//   for (let key = row.length - 1; key > 0; key--) {
//     if (row[key] === row[key - 1]) {
//       row[key] = 2 * row[key]
//       row[key - 1] = 0
//       row = shiftRowRight(row)
//     }
//   }
//   return row
// }

function merge2Right (board, score) {
  for (let col = 0; col < board.length; col++) {
    for (let row = board[col].length - 1; row > 0; row--) {
      if (board[col][row] > 0 && board[col][row] === board[col][row - 1]) {
        board[col][row] = 2 * board[col][row]
        score = score + board[col][row] * 10
        board[col][row - 1] = 0
        board[col] = shiftRowRight(board[col])
      }
    }
  }

  return { board, score }
}

function merge2Left (board, score) {
  for (let col = 0; col < board.length; col++) {
    for (let row = 0; row < board[col].length; row++) {
      if (board[col][row] > 0 && board[col][row] === board[col][row + 1]) {
        board[col][row] = 2 * board[col][row]
        score = score + 2 * board[col][row]
        board[col][row + 1] = 0
        board[col] = shiftRowLeft(board[col])
      }
    }
  }

  return { board, score }
}

function rotateRight (board) {
  // transpose
  let newboard = []
  for (let col = 0; col < board.length; col++) {
    const newRow = []
    for (let row = board[col].length - 1; row >= 0; row--) {
      newRow.push(board[row][col])
    }
    newboard.push(newRow)
  }
  return newboard
}

function rotateLeft (board) {
  let newboard = []
  for (let col = board.length - 1; col > 0; col--) {
    const newRow = []
    for (let row = board[col].length - 1; row >= 0; row--) {
      newRow.unshift(board[row][col])
    }
    newboard.push(newRow)
  }
}

function moveRight (board, score, gameOver) {
  let boardcopy = deepCopy(board)
  boardcopy = shiftMatrixRight(boardcopy)
  boardcopy = merge2Right(boardcopy, score).board
  score = merge2Right(boardcopy, score).score
  // if this changes the board, add a new square
  console.log('board,', board)
  console.log('boardcopy,', boardcopy)
  console.log('isMoved', isMoved(board, boardcopy))
  if (isMoved(board, boardcopy)) {
    boardcopy = addNewNumber(boardcopy)
    // check if the game is over
    if (getBlankCordinates(boardcopy).length === 0) {
      gameOver = true
    // TO DO: show a fail message and reset the game
    } else {
      gameOver = false
      return { boardcopy, score, gameOver }
    }
  } else {
    return { boardcopy, score, gameOver }
  }
}

function moveLeft (board, score, gameOver) {
  let boardcopy = deepCopy(board)
  boardcopy = shiftMatrixLeft(boardcopy)
  boardcopy = merge2Left(boardcopy, score).board
  score = merge2Left(boardcopy, score).score
  // if this changes the board, add a new square
  console.log('board,', board)
  console.log('boardcopy,', boardcopy)
  console.log('isMoved', isMoved(board, boardcopy))
  if (isMoved(board, boardcopy)) {
    boardcopy = addNewNumber(boardcopy)
    // check if the game is over
    if (getBlankCordinates(boardcopy).length === 0) {
      gameOver = true
    // TO DO: show a fail message and reset the game
    } else {
      gameOver = false
      return { boardcopy, score, gameOver }
    }
  } else {
    return { boardcopy, score, gameOver }
  }
}

function moveUp (board, score, gameOver) {
  let boardcopy = deepCopy(board)
  boardcopy = shiftMatrixRight(boardcopy)
  boardcopy = merge2Right(boardcopy, score).board
  score = merge2Right(boardcopy, score).score
  // if this changes the board, add a new square
  console.log('board,', board)
  console.log('boardcopy,', boardcopy)
  console.log('isMoved', isMoved(board, boardcopy))
  if (isMoved(board, boardcopy)) {
    boardcopy = addNewNumber(boardcopy)
    // check if the game is over
    if (getBlankCordinates(boardcopy).length === 0) {
      gameOver = true
    // TO DO: show a fail message and reset the game
    } else {
      gameOver = false
      return { boardcopy, score, gameOver }
    }
  } else {
    return { boardcopy, score, gameOver }
  }
}

// ===========================================
// -REDUCER-
// ===========================================

const boardReducer = (state = initialState, action) => {
  const stateCopy = deepCopy(state)
  let board = stateCopy.board
  let score = stateCopy.score
  let gameOver = stateCopy.gameOver
  switch (action.type) {
    case 'ADD_NEW':
      const resultAddnew = addNewNumber(board)
      return { ...state, board: resultAddnew }

    case 'TEST_NUMBERS':
      const result2048 = [[2, 4, 8, 16], [32, 64, 128, 256], [512, 1024, 2048, 0], [2, 4, 8, 16]]
      return {
        ...state, board: result2048
      }
      // case 'UP':
      //   const resultUp = matrix.moveUp()
      //   return {
      //     ...state, ...resultUp
      //   }

      // case 'DOWN':
      //   const resultDown = matrix.moveDown()
      //   return { ...state, ...resultDown }

    case 'RIGHT':
      const resultRight = moveRight(board, score, gameOver)
      console.log('result right', resultRight)

      return { ...state, board: resultRight.boardcopy, score: resultRight.score }

    case 'LEFT':
      let resultLeft = moveLeft(board, score, gameOver)
      console.log('result left,', resultLeft)
      return { ...state, board: resultLeft.boardcopy, score: resultLeft.score }

    case 'RESTART':
      return initialState

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
