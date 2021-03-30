# File Structure

<!-- tabs:start -->

#### **Android**

On android, boomlings is stored within the [Root directory](https://en.wikipedia.org/wiki/Root_directory) of the device under `/data/data/com.robtopx.boomlings/` which houses a lot of the games data.

| path | filename | description |
|:-----|:---------|:------------|
| `/data/data/com.robtopx.boomlings/` | CCGameManager.dat | Contains general save data |
| `/data/data/com.robtopx.boomlings/` | CCGameSave.dat | Contains data about the current game session which has been saved |
| `/data/data/com.robtopx.boomlings/` | CCGameStore.dat | Contains store data |
| `/data/data/com.robtopx.boomlings/` | CCGameStatistics.dat | contains your overall statistics |
| `/data/app/com.robtopx.boomlings-1/lib/` | libgame.so | The games binary |
| `/data/app/com.robtopx.boomlings-1/` | base.apk | Contains the APK of Boomlings |

### Apk structure

This structure can be accessed by unpacking the APK

| path | description |
|:-----|:------------|
| `/lib/{architecture}/` | Contains the games binaries |
| `/assets/` | All of the assets used in the game

#### **IOS**

No information due to being unable to aquire a boomlings [ipa](https://en.wikipedia.org/wiki/.ipa)

<!-- tabs:end -->