# CheckDailyReward

Daily Rewards are a feature within Boomlings which can be found on the main menu. Once per day you can use it and collect coins depending on how many days you have claimed a reward.

## Parameters

udid - the player's [Unique Device Identifier](https://en.wikipedia.org/wiki/UDID)

secret - Wmfd2893gb7

## Request Example

<!-- tabs:start -->

### **Python**

```py
import aiohttp
import asyncio

async def main():
    url="http://www.robtopgames.com/Boomlings/checkDailyReward.php"

    async with aiohttp.ClientSession() as session:
        async with session.post(url, data={"udid": "your udid", 
                                           "secret": "Wmfd2893gb7"}) as resp:
            print(resp.status)
            print(await resp.text())


loop = asyncio.get_event_loop()
loop.run_until_complete(main())
```

**Response**
```py
1_1
```

<!-- tabs:end -->

You can find the structure for the server response [here](/resources/server/rewards.md)