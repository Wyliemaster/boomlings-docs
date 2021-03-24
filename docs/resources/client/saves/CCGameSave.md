# CCGameSave.dat

CCGameSave contains data which is used to keep track of your sessions in boomlings. All data in `CCGameSave` are in XML with a `<k>key</k><string>value</string>` format

| Key | Type | Value |
|:----|:-----|:------|
| k1 | **String** | The [GameState](/topics/gameState) |
| k2 | **Integer** | The stage the player has reached |
| k3 | **Integer** | The score the player has aquired |
| k4 | **Integer** | Highest Score from a match |
| k5 | **Integer** | |
| k6 | **Float** | Time Spent playing|
| k7 | **Integer** | |
| k8 | **Integer** | |
| k9 | **Dict** | [Game Statistics](/resources/client/saves/CCGameStatistics) for that session |
| k10 | **Integer** | Unknown -> hardcoded to `0` |
| k11 | **Integer** | |
| k12 | **Integer** | |
| k13 | **Integer** | |
| k14 | **Dict** | [Available Powerups](/topics/powerups) |
| k15 |**Integer** | |
| k16 |**Integer** | Most Likely `GameVersion` |

