# 2048 - React - Redux
This is a front-end project of the game 2048 (originally created by Gabriele Cirulli) using React and Redux technologies. 

# How to play
The user will use arrowup, arrowdown, arrowright, and arrowleft to slide numbered tiles on a grid to combine them to create a tile with the number 2048. If all squares are occupied, the user loses the game. 

* For this game to be more intuitive to the user, animation and transition are necessary to indict the movement direction and to help user identify the newly generated square at random location. My version haven't added these transitions. I am not working on this project right now. 

## Techonology used
React, Redux, React-redux

## Game Logic
How I break down the game logic and wrote reducer rules

![Game Logic]([https://github.com/LannyWang009/2048-react-redux/public/img/gamelogic.jpg])

- Tighten rules: when a direction input is fired, there should be no empty tile in between tiles in the direction. All tiles move to that direction. 
- Movement rules: (1)movement has to be non-greedy: tiles can only merge once; (2) move direction priority: when multiple tiles can be merged, we prioritize the ones on the moving directions, so [2][2][2] (right move ->) creates [2][4]. 
- Check for valid moves, if no changes (no tighten or merge) happen to tiles, it's an invalid move. Nothing changes. 
- If move is valid, check if the game is over, if it is not over, add a new [2] or [4] should be added to the empty space; if the game is over, show game end UI. 

- Win condition: 2048 is created
- Lose condition: no empty space on board
