#!/bin/bash


    curl --include --request POST http://localhost:4741/sign-up \
      --header "Content-Type: application/json" \
      --data '{
        "credentials": {
          "email": "test@email.com",
          "password": "test",
          "password_confirmation": "test"
        }
      }'

# --header "Content-Type: application/x-www-form-urlencoded"

# data output from curl doesn't have a trailing newline
echo
