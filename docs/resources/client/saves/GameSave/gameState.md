# GameState

GameState contains all the data for each boomling on the board. the structure is made up in collumns and goes from `bottom -> top`, `left -> right`and each collumn starting and ending with a `-` to tell the game when it ends

Each individual spot on the grid is split with a `.` while the properties for the boomlings are divided by a `,`

## Example data

`0.-_r,1.0.0.0.0.0.B_o,1.-_o,0.0.0.B_p,0.0.0.C_b,0.-_g,0`

![Example](https://media.discordapp.net/attachments/824385800023572570/824385812337524736/unknown.png)

### Boomlings

There are various types of boomlings that can be added to the board

| Structure |
|:----------|
| `{BoomType}_{colour}` |

#### Boomling Types

| Type | Description |
|:-----|:------------|
| | Generic Boomling -> no prefix |
| `C` | exploding Boomling |
| `B` | Bomb |
| `I` | Ice Bomb |
| `P` | Pipe |
| `S` | Skull |

#### Boomling Properties

`{boomling},{isFrozen},{timer}`