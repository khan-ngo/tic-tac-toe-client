#!/bin/bash

# EMAIL=2@email.com PASSWORD=two sh scripts/sign-in-json.sh

    curl http://localhost:4741/sign-in \
      --include \
      --request POST \
      --header "Content-Type: application/json" \
      --data '{
        "credentials": {
          "email": "'"${EMAIL}"'",
          "password": "'"${PASSWORD}"'"
        }
      }'

# data output from curl doesn't have a trailing newline
echo
