# 2048 - React - Redux
This is a front-end project of building the game 2048 using React and Redux technologies. 

User can use arrow keys to push and merge the number squares in four directions. The goal is to join the number 2048. If all squares are occupied, the user fails the game. 

## Techonology used

# Game Logic
## Actions:
Arrow keys
- Right: Shift and merge numbers on the board to the right
- Left: Shift and merge numbers to the left
- Up: Shift and merge numbers upwards
- Down: Shift and merge numbers downwards

## Rules:
Restart button
- Restart: Reset the game to initial state
- Tighten rules: when a direction input is fired, there should be no empty tile in between tiles in the direction. All tiles move to that direction. 
- Movement rules: (1)movement has to be non-greedy: tiles can only merge once; (2) move direction priority: when multiple tiles can be merged, we prioritize the ones on the moving directions, so [2][2][2] (right move ->) creates [2][4]. 
- Check for valid moves, if no changes (no tighten or merge) happen to tiles, it's an invalid move. Nothing changes. 
- If move is valid, a new [2] or [4] should be added to the empty space.

- Win condition: 2048 is created
- Lose condition: no empty space on board

![Game Logic](https://github.com/LannyWang009/2048-react-redux/blob/master/public/img/gamelogic.jpg?raw=true)


Need to :
1) fix the mergeleft(shiftMatrixLeft) bug with score
2) add the local storage and mount to lifecycle functions
