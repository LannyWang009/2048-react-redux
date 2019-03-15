export default class Matrix {
  constructor ({ board, score, bestScore, gameOver, isMoved }) {
    this.board = JSON.parse(JSON.stringify(board))
    this.score = score
    this.bestScore = bestScore
    this.gameOver = gameOver
    this.isMoved = isMoved

    // this.combineNumToLeft=this.combineNumToLeft.bind(this)
  }

  getBlankCordinates () {
    // this takes in this.state.board, returns an array of blank coordinates
    const { board } = this
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

  addNewNumber () {
    const { board } = this
    const newboard = JSON.parse(JSON.stringify(board))
    // if the game is over, don't change the board
    if (this.gameOver) { return { board } }

    // if the board is moved and the board is filled, turn game over, don't change the board
    if (!this.isMoved) {
      if (this.checkGameOver(newboard)) {
        this.gameOver = true
        return { gameOver: true }
      }
      return { board }
    }
    // if there is no blank space, turn on gameOver state
    const emptyCordinates = this.getBlankCordinates()
    if (emptyCordinates.length === 0) {
      if (this.checkGameOver(newboard)) {
        this.gameOver = true
        return { gameOver: true }
      }
      return { board }
    }
    // else add a new square
    const cor = this.getRandomNumber(emptyCordinates)
    newboard[cor[0]][cor[1]] = 2
    if (this.checkGameOver(newboard)) {
      this.gameOver = true
      return { gameOver: true, board: newboard }
    }
    this.board = newboard
    return { board: newboard }
  }

  isBoardMoved (oldBoard, newBoard) {
    return (JSON.stringify(oldBoard) !== JSON.stringify(newBoard))
  }

  rotateClockwise () {
    // Find transpose of matrix.
    // Reverse rows of the transpose.
    const { board } = this
    const newBoard = []
    const L = board.length
    for (let col = 0; col < L; col++) {
      const newRow = []
      for (let row = L - 1; row >= 0; row--) {
        newRow.push(board[row][col])
      }
      newBoard.push(newRow)
    }
    this.board = newBoard
    return newBoard
  }

  rotateCounterClock () {
    // Find transpose of matrix.
    // Reverse columns of the transpose.
    const { board } = this
    const newBoard = []
    const L = board.length
    for (let col = L - 1; col >= 0; col--) {
      const newRow = []
      for (let row = L - 1; row >= 0; row--) {
        newRow.unshift(board[row][col])
      }
      newBoard.push(newRow)
    }
    this.board = newBoard
    return newBoard
  }

  shiftRight () {
    // push all numbers to the right
    const { board } = this
    const newBoard = []
    const L = board.length

    // Shift all numbers to the right
    for (let row = 0; row < L; row++) {
      const boardRow = []
      for (let col = 0; col < board[row].length; col++) {
        const current = board[row][col]
        if (current === 0) {
          boardRow.unshift(current)
        } else {
          boardRow.push(current)
        }
      }
      newBoard.push(boardRow)
    }
    this.board = newBoard
    return newBoard
  }

  shiftLeft () {
    const { board } = this
    const newBoard = []
    const len = board.length
    for (let r = 0; r < len; r++) {
      const newRow = []
      for (let c = board[r].length - 1; c >= 0; c--) {
        const current = board[r][c]
        if (current === 0) newRow.push(current)
        else newRow.unshift(current)
      }
      newBoard.push(newRow)
    }
    this.board = newBoard
    return newBoard
  };

  combineNumToLeft () {
    const { board } = this
    const len = board.length
    let newboard = []

    for (let row = 0; row < len; row++) {
      for (let col = 0; col < len; col++) {
        if (board[row][col] > 0 && board[row][col] === board[row][col + 1]) {
          board[row][col] *= 2
          board[row][col + 1] = 0
          this.score += board[row][col]
        } else if (board[row][col] === 0 && board[row][col + 1] > 0) {
          board[row][col] = board[row][col + 1]
          board[row][col + 1] = 0
        }
      }
    }
    this.board = newboard
    return newboard
  };

  combineNumToRight () {
    const { board } = this
    const len = board.length
    // Combine numbers and shift to right
    for (let row = 0; row < len; row++) {
      for (let col = board[row].length - 1; col >= 0; col--) {
        if (board[row][col] > 0 && board[row][col] === board[row][col - 1]) {
          board[row][col] *= 2
          board[row][col - 1] = 0
          this.score += board[row][col]
        } else if (board[row][col] === 0 && board[row][col - 1] > 0) {
          board[row][col] = board[row][col - 1]
          board[row][col - 1] = 0
        }
      }
    }
    this.board = board
    return board
  };

  move () {
    const prevBoard = JSON.parse(JSON.stringify(this.board))
    const { board, score, bestScore } = this
    const isMoved = this.isBoardMoved(prevBoard, board)
    const newstate = {
      board,
      score,
      bestScore: score > bestScore ? score : bestScore,
      isMoved
    }
    if (isMoved) {
      newstate.prevBoard = prevBoard
    }
    return newstate
  }

  moveUp () {
    const prevBoard = JSON.parse(JSON.stringify(this.board))
    this.rotateClockwise()
    this.shiftRight()
    this.combineNumToRight()
    this.rotateCounterClock()

    const { board, score, bestScore } = this
    const isMoved = this.isBoardMoved(prevBoard, board)
    const newstate = {
      board,
      score,
      bestScore: score > bestScore ? score : bestScore,
      isMoved
    }
    if (isMoved) {
      newstate.prevBoard = prevBoard
    }
    return newstate
  }

  moveDown () {
    this.rotateClockwise()
    this.shiftLeft()
    this.combineNumToLeft()
    this.rotateCounterClock()
    this.move()
  }

  moveLeft () {
    this.shiftLeft()
    this.combineNumToLeft()
    this.move()
  }

  moveRight () {
    this.shiftRight()
    console.log('before move', this.board)
    this.shiftRight()
    console.log('after(shiftRight),', this.board)
    this.combineNumToRight()
    console.log('after(combineRight),', this.board)
    this.move()
  }
  checkGameOver (board) {
    const boardCopy = JSON.parse(JSON.stringify(board))
    const check = foo => {
      this.board = boardCopy
      const isMoved = this.isBoardMoved(boardCopy, foo().board)
      //   this.board = boardCopy
      return isMoved
    }
    const moves = [
      check(this.moveUp),
      check(this.moveDown),
      check(this.moveRight),
      check(this.moveLeft)
    ]
    return !moves.includes(true)
  }
}
