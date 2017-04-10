#!/bin/bash

#TOKEN=  sh scripts/game/create.sh
API="${API_ORIGIN:-http://localhost:4741}"
URL_PATH="/games"
curl --include --request POST "${API}${URL_PATH}" \
  --header "Authorization: Token token=$TOKEN" \
  --header "Content-Type: application/json"



# data output from curl doesn't have a trailing newline
echo
