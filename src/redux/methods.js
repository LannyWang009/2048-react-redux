function deepcopy (x) {
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
  const newboard = deepcopy(board)
  const emptyCordinates = getBlankCordinates(board)
  const cor = getRandomNumber(emptyCordinates)
  newboard[cor[0]][cor[1]] = 2
  return newboard
}
