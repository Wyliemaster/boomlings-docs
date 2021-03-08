# checkRefCredit

checkRefCredit is used to check how many people you have 'recruited' using your referralID, for each new recruit you find, you get 500 coins

## parameters

udid - the player's [Unique Device Identifier](https://en.wikipedia.org/wiki/UDID)

secret - Wmfd2893gb7


### Request Example

<!-- tabs:start -->

### **Python**

```py
import aiohttp
import asyncio

async def main():
    url="http://www.robtopgames.com/Boomlings/checkRefCredit.php"

    async with aiohttp.ClientSession() as session:
        async with session.post(url, data={"udid":"your udid", "secret":"wmfd2893gb7"}) as resp:
            print(resp.status)
            print(await resp.text())


loop = asyncio.get_event_loop()
loop.run_until_complete(main())
```

**Response**
```py
1;1
```

<!-- tabs:end -->

To learn the structure, please refer to [this](/resources/server/referral.md)