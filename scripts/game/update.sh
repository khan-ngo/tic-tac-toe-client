#!/bin/bash
#EMAIL=2@email.com PASSWORD=two sh scripts/auth/sign-in.sh

#TOKEN=BAhJIiVjMTc5OTYwOTAyZDVhOWEwOWQ2NmY0M2M4ZmFmODhmNgY6BkVG--6efdf6b549dfba20611ad4aedd8b785c614eaa58  sh scripts/game/create.sh

#ID=24 TOKEN=BAhJIiVjMTc5OTYwOTAyZDVhOWEwOWQ2NmY0M2M4ZmFmODhmNgY6BkVG--6efdf6b549dfba20611ad4aedd8b785c614eaa58 sh scripts/game/update.sh
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
