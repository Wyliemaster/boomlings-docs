# CCGameSave.dat

CCGameSave contains data which is used to keep track of your sessions in boomlings. All data in `CCGameSave` are in XML with a `<k>key</k><i>value</i>` format

| Key | Type | Value |
|:----|:-----|:------|
| k1 | **String** | The GameState | <!-- needs investigating --> 
| k2 | **Integer** | The stage the player has reached |
| k3 | **Integer** | The score the player has aquired |
| k4 | **Integer** | |
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

