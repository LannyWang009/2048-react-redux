const initialState = {
  board: [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
  score: 0,
  gameOver: false
}

class Matrix {
    constructor ({board, score}){
        this.board = JSON.parse(JSON.stringify(board));
        this.score = score
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
      
    
}





const boardReducer = (state = initialState, action) => {
    let matrix = new Matrix(state)

  switch (action.type) {
    case 'ADD_NEW':
      const result = matrix.addNewNumber()
      console.log(result)
      return {
          ...state, ...result
      }
    default:
      return state
  }
}

export default boardReducer
