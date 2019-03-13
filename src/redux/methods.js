deepcopy (x) {
    y = JSON.parse(JSON.stringify(x))
    return y
}

getBlankCordinates (board) {
    // this takes in this.state.board, returns an array of blank coordinates
    
    const blankCoordinates = []
    for (let row = 0; row < board.length; row++) {
      for (let col = 0; col < board[row].length; col++) {
        if (board[row][col] === 0) { blankCoordinates.push([row, col]) }
      }
    }
    return blankCoordinates
  }

getRandomNumber (arr) {
    // it returns a random index in the array
    let r = Math.floor(Math.random() * arr.length)
    return arr[r]
  }

addNewNumber (board) {
    
    const newboard = JSON.parse(JSON.stringify(board))
    const emptyCordinates = this.getBlankCordinates()
    const cor = this.getRandomNumber(emptyCordinates)
    newboard[cor[0]][cor[1]] = 2
    this.board = newboard
    return { board: newboard }
  }