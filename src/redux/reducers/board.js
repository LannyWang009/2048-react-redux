const initialState = {
  board: [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
  score: 0,
  bestScore: 0,
  gameOver: false,
  isMoved: true
}

class Matrix {
    constructor ({board, score}){
        this.board = JSON.parse(JSON.stringify(board));
        this.score = score
        this.bestScore = bestScore
        this.gameOver = gameOver
        this.isMoved = isMoved
    }

    getBlankCordinates = () => {
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
    
      getRandomNumber = (arr) => {
        // it returns a random index in the array
        let r = Math.floor(Math.random() * arr.length)
        return arr[r]
      }

      addNewNumber = () => {
        const { board } = this
        const newboard = JSON.parse(JSON.stringify(board))
        const emptyCordinates = this.getBlankCordinates()
        const cor = this.getRandomNumber(emptyCordinates)
        newboard[cor[0]][cor[1]] = 2
        this.board = newboard
        return {board: newboard}
      }

      isBoardMoved = (oldBoard, newBoard) => {
          return (JSON.stringify(oldBoard) !== JSON.stringify(newBoard))
      }
      
      rotateClockwise = () => {
        // Find transpose of matrix.
        // Reverse rows of the transpose.
          const {board} = this
          const newBoard = []
          const L = board.length
          for (let col=0; col<L;i++) {
              const newRow = []
              for (let row=L; row>=0; row--){
                  newRow.push(board[row][col])
              }
              newBoard.push(newRow)
          }
          this.board = newBoard
          return newBoard
      }

      rotateAntiClock = () => {
        // Find transpose of matrix.
        // Reverse columns of the transpose.
        const {board} = this
        const newBoard = []
        const L = board.length
        for (let col = L - 1; col >= 0; col--) {
            const newRow = [];
            for (let row = L - 1; row >= 0; row--) {
              newRow.unshift(board[row][col]);
            }
            newBoard.push(newRow);
          }
      
          this.board = newBoard;
          return newBoard;
        };
      }

      shiftRight = () => {
        const { board } = this;
        const newBoard = [];
        const L = board.length;
    
        // Shift all numbers to the right
        for (let row = 0; row < L; row++) {
          const boardRow = [];
          for (let col = 0; col < board[row].length; col++) {
            const current = board[row][col];
            if (current === 0) {
                boardRow.unshift(current)
            } else {
                boardRow.push(current)
            }
          }
          newBoard.push(boardRow);
        }
        this.board = newBoard;
        return newBoard;
      };
    
      shiftLeft = () => {
        const { board } = this;
        const newBoard = [];
        const len = board.length;
        for (let r = 0; r < len; r++) {
          const newRow = [];
          for (let c = board[r].length - 1; c >= 0; c--) {
            const current = board[r][c];
            if (current === 0) newRow.push(current);
            else newRow.unshift(current);
          }
          newBoard.push(newRow);
        }
        this.board = newBoard;
        return newBoard;
      };
    
      combineNumToLeft = () => {
        const { matrix } = this;
        const len = matrix.length;
    
        for (let row = 0; row < len; row++) {
          for (let col = 0; col < len; col++) {
            if (matrix[row][col] > 0 && matrix[row][col] === matrix[row][col + 1]) {
              matrix[row][col] *= 2;
              matrix[row][col + 1] = 0;
              this.score += matrix[row][col];
            } else if (matrix[row][col] === 0 && matrix[row][col + 1] > 0) {
              matrix[row][col] = matrix[row][col + 1];
              matrix[row][col + 1] = 0;
            }
          }
        }
        this.matrix = matrix;
        return matrix;
      };
    
      combineNumToRight = () => {
        const { matrix } = this;
        const len = matrix.length;
        // Combine numbers and shift to right
        for (let row = 0; row < len; row++) {
          for (let col = matrix[row].length - 1; col >= 0; col--) {
            if (matrix[row][col] > 0 && matrix[row][col] === matrix[row][col - 1]) {
              matrix[row][col] *= 2;
              matrix[row][col - 1] = 0;
              this.score += matrix[row][col];
            } else if (matrix[row][col] === 0 && matrix[row][col - 1] > 0) {
              matrix[row][col] = matrix[row][col - 1];
              matrix[row][col - 1] = 0;
            }
          }
        }
        this.matrix = matrix;
        return matrix;
      };
    



    






const boardReducer = (state = initialState, action) => {
    let matrix = new Matrix(state)

  switch (action.type) {
    case 'ADD_NEW':
      const result = matrix.addNewNumber()
    //   console.log(result)
      return {
          ...state, ...result
      }
    
    default:
      return state
  }
}

export default boardReducer
