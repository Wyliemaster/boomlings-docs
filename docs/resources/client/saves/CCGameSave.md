# CCGameSave.dat

CCGameSave contains data which is used to keep track of your sessions in boomlings. All data in `CCGameSave` are in XML with a `<k>key</k><string>value</string>` format

| Key | Type | Value |
|:----|:-----|:------|
| k1 | **String** | The [GameState](/topics/gameState) |
| k2 | **Integer** | The stage the player has reached |
| k3 | **Integer** | The score the player has aquired |
| k4 | **Integer** | Pending XP |
| k5 | **Integer** | The Score aquired in the current stage |
| k6 | **Float** | Time Spent playing |
| k7 | **Integer** | Bonus Gold |
| k8 | **Bool** | If a respawn is available |
| k9 | **Dict** | [Game Statistics](/resources/client/saves/CCGameStatistics) for that session |
| k10 | **Bool** | Level Completed |
| k11 | **Bool** | Used an item|
| k12 | **Bool** | If the timers are frozen |
| k13 | **Integer** | total frozen Timers |
| k14 | **Dict** | [Available Powerups](/topics/powerups) |
| k15 |**Integer** | |
| k16 |**Integer** | Most Likely `GameVersion` |

