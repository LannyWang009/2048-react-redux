# Game Logic

## Rules:
- Tighten rules: when a direction input is fired, there should be no empty tile in between tiles in the direction. All tiles move to that direction. 
- Movement rules: (1)movement has to be non-greedy: tiles can only merge once; (2) move direction priority: when multiple tiles can be merged, we prioritize the ones on the moving directions, so [2][2][2] (right move ->) creates [2][4]. 
- Check for valid moves, if no changes (no tighten or merge) happen to tiles, it's an invalid move. Pop up an alert. 
- If move is valid, a new [2] or [4] should be added to the empty space

- Win condition: 2048 is created
- Lose condition: no empty space on board

## Actions:
arrow keys
- Right
- Left
- Up
- Down

Restart button
- Restart

