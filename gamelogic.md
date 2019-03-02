## Game Logic

# Movement rules:

- movement has to be non-greedy: tiles can only merge once
- move direction priority: when multiple tiles can be merged, we prioritize the ones on the moving directions.  [2][2][2] (right move ->) creates [2][4]
- check for valid moves, if no changes happen to tiles, invalid move
- If move is valid a new [2] or [4] should be added to the empty space

- Win condition: 2048 is created
- Lose condition: no empty space on board

# Actions:
- Right
- Left
- Up
- Down
- Restart

