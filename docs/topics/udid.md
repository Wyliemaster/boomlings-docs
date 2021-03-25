# UDID

Most of the interactions with the server use a [udid](https://en.wikipedia.org/wiki/UDID) which is used to keep track of each player's progression. A UDID is build up of 5 sections with random letters and numbers as `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxx`

<!-- tabs:start -->

### **Python**

<!--Stolen from GDDocs-->
```py
import random
from string import ascii_letters, digits  # so we don't have to type [A-Za-z0-9] by hand

# this code works only on python 3.6 and above

possible_letters = ascii_letters + digits


def generate_rs(n: int) -> str:
    return ("").join(random.choices(possible_letters, k=n))


def generate_udid(parts: [int] = (8, 4, 4, 4, 10)) -> str:
    # apply generate_rs to each number in parts, then join results
    return ("-").join(map(generate_rs, parts))

```

<!-- tabs:end -->