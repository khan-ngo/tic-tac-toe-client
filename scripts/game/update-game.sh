API="${API_ORIGIN:-http://localhost:4741}"
URL_PATH="/games/" + "71"
curl "${API}${URL_PATH}" \
  --include \
  --request PATCH \
  --header "Authorization: Token token=BAhJIiVjYTAyZTg0NjExYmM5YzYwZTAyZGEwMjgxMWY3OWI3ZAY6BkVG--605c6e48c76fcba6668c22bce086b361284a87ef \
  --header "Content-Type: application/json" \
  --data '{
    "game": {
      "cell": {
        "index": s1,
        "value": "x"
      },
      "over": false
    }
  }'
