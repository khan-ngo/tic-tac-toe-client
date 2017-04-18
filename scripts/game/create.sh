#!/bin/bash

#TOKEN= BAhJIiVjMTc5OTYwOTAyZDVhOWEwOWQ2NmY0M2M4ZmFmODhmNgY6BkVG--6efdf6b549dfba20611ad4aedd8b785c614eaa58 sh scripts/game/create.sh
API="${API_ORIGIN:-http://localhost:4741}"
URL_PATH="/games"
curl --include --request POST "${API}${URL_PATH}" \
  --header "Authorization: Token token=$TOKEN" \
  --header "Content-Type: application/json"


# output: {"game":{"id":24,"cells":["","","","","","","","",""],"over":false,"player_x":{"id":3,"email":"2@email.com"},"player_o":null}}
# ~/wdi/projects/tic-tac-toe-client (master)

# data output from curl doesn't have a trailing newline
echo
