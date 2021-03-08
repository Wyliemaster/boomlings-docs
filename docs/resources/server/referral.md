<!-- 
Register Referal errors

kE01 - This device has already been registered!
kE02 - The entered ID is invalid. Please try again.
kE03 - You cannot use your own referral ID. Please try again.

-1 - Something went wrong. Please try again later.
 -->

 # Referrals

 Referrals are a feature within Boomlings which is intended to motivate players into inviting their friends to play Boomlings. Each player gets a unique 6 digit [ReferralID](/topics/referral.md) which gives the player an opportunity to get `500 coins` for each person they get to redeem their referralID.

 > As of the latest Version of Boomlings, there are 3 referral endpoints<br/><br/>
 > - checkRefCredit is used to check how many people have registered using your referralID
 > - getRefID is used to generate the referralID for a player which is then used by other players to get coins when registering an account.  
 > - registerReferral is used to claim other peoples referralID's. it can only be used once per account

 ## checkRefCredit Structure

 checkRefCredit has a simple response from the server. Each part of the response is split by a `;` below you will see the structure of the response.

| Structure |
|:----------|
| `{New Referrals Recruited};{Total Referrals Recruited}`

## getRefID

getRefID has the simplest server response out of all the referral endpoints with only a single value getting returned from the server.

| Structure |
|:----------|
| `{ReferralID}`

## registerReferral

registerReferral is the most complex out of all the referral endpoints as it has many status codes to stop cheaters from getting more gold than they should. A successful register has a response of `1` however, failure has up to `4` error codes

| Error Code | Error Message | Description |
|:-----------|:--------------|:------------|
| `-1`       | Something went wrong. Please try again later. | The Common error -> is used if the failure doesnt meet the criteria for the other error codes |
| `kE01`     | This device has already been registered! | if the player has already registered |
| `kE02`     | The entered ID is invalid. Please try again. | if the ID is invalid |
| `kE03`     | You cannot use your own referral ID. Please try again. | if you try to claim your own referral code |

### Trivia

- The ReferralID sent back from `getRefID` can easily be predicted as the ID increments by 1 in hex for each account registered
