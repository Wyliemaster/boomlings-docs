# put_score.php

put_score is an endpoint used to submit your highscores to the boomlings leaderboards

## Parameters

udid - the player's [Unique Device Identifier](https://en.wikipedia.org/wiki/UDID)

name - the player's in-game name

score - the highest score the player has gotten

context - [context](/topics/context)

secret - Wmfd2893gb7

## Request Example

```py
import aiohttp
import asyncio

async def main():
    url="http://www.robtopgames.com/Boomlings/put_score.php"

    async with aiohttp.ClientSession() as session:
        async with session.post(url, data={
            "udid": "your udid", 
            "name": "player",
            "score": "2147483647",
            "context": "1020063030704",
            "secret": "Wmfd2893gb7"
            }) as resp:
            print(resp.status)
            print(await resp.text())


loop = asyncio.get_event_loop()
loop.run_until_complete(main())
```

**Response**
```py
1
```