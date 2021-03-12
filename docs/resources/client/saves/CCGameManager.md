# CCGameManager

GameManager contains a lot of important information for your save file

| Key | Type | Value |
|:----|:-----|:------|
| highestScore | **Integer** | The player's highest score |
| highestLevel | **Integer** | The player's highest level |
| playerLevel | **Integer** | The player's level |
| playerXP | **Integer** | The amount of XP the player has |
| gameVersion | **Integer** | The Game Version of boomlings -> `1200` as of March 2021 |
| playIntroTutorial | **Bool** | If the player has completed the intro tutorial |
| showIceTut | **Bool** | If the player has completed the ice tutorial |
| showSkullTut | **Bool** | If the player has completed the skull tutorial |
| showMysteryTut | **Bool** | If the player has completed the mystery tutorial |
| showStoneTut | **Bool** | If the player has completed the stone tutorial |
| showPowTut | **Bool** | If the player has completed the pow tutorial |
| showPowUseTut | **Bool** | If the player has completed the power usage tutorial |
| showPowAvailable | **Bool** | If a power is available|
| showedItemTut | **Bool** | If the player has completed the item tutorial |
| showedIconTut | **Bool** | if the player has completed the icon tutorial |
| powSlot0 | **Integer** | The powerID of a power being used |
| powSlot1 | **Integer** | The powerID of a power being used |
| powSlot2 | **Integer** | The powerID of a power being used |
| localHighscores | **Dictionary** | (Investigate) |
| reportedAchievements | **Dictionary** | All achievements you have progress on -> `<k>boomlings.ach.{name}</k><i>{percentage}</i>` |
| cachedScores | **Dictionary** | A Dictionary of leaderboard scores |
| cachedScoresFB | **Dictionary** | A Dictionary of leaderboard scores from facebook friends |
| playerID | **String** | The player's UDID |
| playerName | **String** | The player's name |
| hiddenName | **String** | The player's hidden name |
| playerIcon | **Integer** | The ID of the players icon |
| gameCenterEnabled | **Bool** | If game center is enabled |
| hasUsedReferral | **Bool** | If the player has registered with a referral code |
| playerRefCount | **Integer** | The number of people who have registered using your referral code |
| BGMusicVolume | **Float** | A value between `0 - 1` |
| effectsVolume | **Float** | A value between `0 - 1` |
| killSwitch | **Bool** | ?? |
| didShowAppGratis | **Bool** | If the player has looked at the shady survey feature |
| moreGamesString | **String** | A generated string based on the results from the [checkMoreGames endpoint](/endpoints/checkMoreGames) |
| hasNewGames | **Bool** | If the player has any of the games from `moreGamesString` |
| lastDay | **Integer** | How many days ago since you last played |
| lastMonth | **Integer** | Index of the last month you played? |