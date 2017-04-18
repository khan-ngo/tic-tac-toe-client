#!/bin/bash
ID=231
TOKEN=BAhJIiVkOTQxOGEzZTk4NjRmMmM4MDJkMDFiZDQzMjc2OTBjMgY6BkVG--47764d157b039737d0dca0297861ad71e2bb70ba

API="${API_ORIGIN:-http://localhost:4741}"
URL_PATH="/games/$ID"
curl --include --request PATCH "${API}${URL_PATH}" \
  --header "Authorization: Token token=$TOKEN" \
  --header "Content-Type: application/json" \
  --data '{
  "game": {
    "over": 
  }
}'


# data output from curl doesn't have a trailing newline
echo
