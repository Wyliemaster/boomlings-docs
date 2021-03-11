# Leaderboard Structure

Boomlings Leaderboards are structured in a very strange way. Each individual user on the leaderboard is split with a ` ` and each user has each aspect of their leaderboard position with a `;`

| Structure |
|:----------|
| `{PlayerName};{UDID};{Score};{context}`|

| Key | Value |
|:----|:------|
| `{PlayerName}` | The Player's in-game name |
| `{UDID}` | the player's [Unique Device Identifier](https://en.wikipedia.org/wiki/UDID) |
| `{Score}` | The player's best score merged with other data. The format for scores can be found [here](/topics/context?id=score-structure)
| `{Context}` | A large Int which has various pieces of data merged together. The Format can be foud [here](/topics/context)

### Example Response

    0__ Player;0;1010000000;1001001000000 Player;ffffffff-a1af-512f-ffff-ffffb3383874;1010000000;1001001000000 