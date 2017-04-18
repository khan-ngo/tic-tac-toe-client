#!/bin/bash
#EMAIL=2@email.com PASSWORD=two sh scripts/auth/sign-in.sh

#TOKEN=BAhJIiVjMTc5OTYwOTAyZDVhOWEwOWQ2NmY0M2M4ZmFmODhmNgY6BkVG--6efdf6b549dfba20611ad4aedd8b785c614eaa58  sh scripts/game/create.sh

#ID=108 TOKEN=BAhJIiVmZmQ2ZDVlZjM0MDJmZmMzYjRhZDViOTA0YWU2MGNhNQY6BkVG--1aa5a00df0051daafefd5adc90313c1ad686b7fc sh scripts/game/update.sh


ID=228 
TOKEN=BAhJIiU1OWViYTI5Njk4OWQwOThkZTk3ZTI2ZmM3NDhkNGE3MQY6BkVG--3df04259f376714a2f816e613656c51265db9cb7

API="${API_ORIGIN:-http://localhost:4741}"
URL_PATH="/games/$ID"
curl --include --request PATCH "${API}${URL_PATH}" \
  --header "Authorization: Token token=$TOKEN" \
  --header "Content-Type: application/json" \
  --data '{
  "game": {
    "cell": {
      "index": 0,
      "value": "X"
    },
    "over": false
  }
}'



# data output from curl doesn't have a trailing newline
echo
