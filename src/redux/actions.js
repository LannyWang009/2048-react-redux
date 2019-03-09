// import React, { Component } from 'react'

// export default class Actions extends Component {
//   constructor ({ matrix, score, bestScore, isSuccess, isMoved }) {
//     super({ matrix, score, bestScore, isSuccess, isMoved })
//     this.matrix = JSON.parse(JSON.stringify(matrix))
//     this.score = score
//     this.bestScore = bestScore
//     this.isSuccess = isSuccess
//     this.isMoved = isMoved
//   }

//   hardcopy (x) {
//     return JSON.parse(JSON.stringify(x))
//   }

//   getEmptyCoordinates () {
//     const coordinates = []
//     const matrix = this.matrix
//     for (let row = 0; row < matrix.length; row++) {
//       for (let col = 0; col < matrix.length; col++) {
//         const val = matrix[row][col]
//         if (val === 0) {
//           coordinates.push([row, col])
//         }
//       }
//     }
//     console.log('coordinates,', coordinates)
//     return coordinates
//   }

//   getRandom (arr) {
//     return arr[Math.round(Math.random() * (arr.length - 1))]
//   }

//   isBoardMoved (previousMatrix, newMatrix) {
//     return (JSON.stringify(previousMatrix) !== JSON.stringify(newMatrix))
//   }

//   checkisSuccess = matrix => {
//       deepcopy(matrix)
//   }
//   // get random function

//   // check whether the board moved

//   // check if
// }
