# boomCheckPromo

boomCheckPromo was one of the methods you could earn coins in Boomlings. The player would do specific things from 3rd party content and if you would get a reward for fufilling those condiditons.

## Parameters

udid - the player's [Unique Device Identifier](https://en.wikipedia.org/wiki/UDID)

secret - Wmfd2893gb7

promo - the promoID

## request example

<!-- tabs:start -->

### **Python**

```py
import aiohttp
import asyncio

async def main():
    url="http://www.robtopgames.com/Boomlings/boomCheckPromo.php"

    async with aiohttp.ClientSession() as session:
        async with session.post(url, data={"udid":"your udid", "secret":"wmfd2893gb7", "promo": "promoID"}) as resp:
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