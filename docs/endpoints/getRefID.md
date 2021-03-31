# registerReferral

RegisterReferral was a way RobTop tried to get new players in boomlings. By inviting your friends and using a referralID, players are rewarded with `500` coins

## Parameters

udid - the player's [Unique Device Identifier](https://en.wikipedia.org/wiki/UDID)

secret - Wmfd2893gb7


### Request Example

<!-- tabs:start -->

### **Python**

```py
import aiohttp
import asyncio

async def main():
    url="http://www.robtopgames.com/Boomlings/getRefID.php"

    async with aiohttp.ClientSession() as session:
        async with session.post(url, data={"udid":"your udid", "secret":"wmfd2893gb7"}) as resp:
            print(resp.status)
            print(await resp.text())


loop = asyncio.get_event_loop()
loop.run_until_complete(main())
```

**Response**
```py
refID
```

<!-- tabs:end -->

To learn the structure, please refer to [this](/resources/server/referral.md)