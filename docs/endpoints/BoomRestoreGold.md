# boomRestoreGold

boomRestoreGold is a way to restore coins back onto your account in case there was a desync

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
    url="http://www.robtopgames.com/Boomlings/BoomRestoreGold.php"

    async with aiohttp.ClientSession() as session:
        async with session.post(url, data={"udid": "your udid", "secret": "Wmfd2893gb7"}) as resp:
            print(resp.status)
            print(await resp.text())


loop = asyncio.get_event_loop()
loop.run_until_complete(main())
```

**Response**
```py
GoldTotal
```

<!-- tabs:end -->