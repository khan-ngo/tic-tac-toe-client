#!/bin/bash
#test update by executing the prerequisite steps
#EMAIL=test1 PASSWORD=test sh scripts/auth/sign-in.sh
#TOKEN=  sh scripts/game/create.sh
#ID= TOKEN= sh scripts/game/update.sh
API="${API_ORIGIN:-http://localhost:4741}"
URL_PATH="/games/$ID"
curl --include --request PATCH "${API}${URL_PATH}" \
  --header "Authorization: Token token=$TOKEN" \
  --header "Content-Type: application/json" \
  --data '{
  "game": {
    "cell": {
      "index": 0,
      "value": "x"
    },
    "over": false
  }
}'



# data output from curl doesn't have a trailing newline
echo
