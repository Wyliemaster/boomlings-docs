# boomCheckClaim

boomCheckClaim was one of the methods you could earn coins in Boomlings. A request would be sent to the servers if you were able to claim coins after a promo

## Parameters

udid - the player's [Unique Device Identifier](https://en.wikipedia.org/wiki/UDID)

secret - Wmfd2893gb7

## request example

<!-- tabs:start -->

### **Python**

```py
import aiohttp
import asyncio

async def main():
    url="http://www.robtopgames.com/Boomlings/boomCheckClaim.php"

    async with aiohttp.ClientSession() as session:
        async with session.post(url, data={"udid":"your udid", "secret":"wmfd2893gb7"}) as resp:
            print(resp.status)
            print(await resp.text())


loop = asyncio.get_event_loop()
loop.run_until_complete(main())
```

**Response**
```py
kP:1:kM:0:kG:1
```

<!-- tabs:end -->

To learn the structure, please refer to [this](/resources/server/promo.md)