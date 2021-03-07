# CheckMoreGames

checkMoreGames was a way for robtop to promote his other games without directly updating Boomlings. As of the current version of Boomlings, this endpoint no longer exists. This wont stop us from showing how the endpoint used to behave though.

<!-- tabs:start -->

### **Python**

```py
import aiohttp
import asyncio

async def main():
    url="http://www.robtopgames.com/Boomlings/checkMoreGames.php"

    async with aiohttp.ClientSession() as session:
        async with session.get(url) as resp:
            print(resp.status)
            print(await resp.text())


loop = asyncio.get_event_loop()
loop.run_until_complete(main())
```

**Response**
```py
gj_mm_mu
```

<!-- tabs:end -->

To learn the structure, please refer to [this](/resources/server/promo.md)