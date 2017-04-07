#!/bin/bash

#curl "http://localhost:3000/change-password/${ID}" \
  # ID=5 OLDPW=pwd NEWPW=passwd TOKEN=BAhJIiVkNjMwYmZjMDVlOGVhMGU4NmRiZDUxNzAwNDJkMDg4YQY6BkVG--bb47bf6c1e53284b932c0075a23e2249ba12f8d3 scripts/change-password.sh
ID="3"
OLDPW="two"
NEWPW="two"

TOKEN="BAhJIiVhMWQyMjM0NjkxMWViN2I2NDhmMzcwY2RkNzUyOTA2MQY6BkVG--2403d578ef98af87fc257daa91e2a71d8445dfa7"
  API="${API_ORIGIN:-http://localhost:4741}"
  URL_PATH="/change-password/$ID"

  curl --include --request PATCH "${API}${URL_PATH}" \
    --header "Authorization: Token token=$TOKEN" \
    --header "Content-Type: application/json" \
    --data '{
      "passwords": {
        "old": "'"${OLDPW}"'",
        "new": "'"${NEWPW}"'"
    }
      }'


# data output from curl doesn't have a trailing newline
echo
