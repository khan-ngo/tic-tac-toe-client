  'use strict'

const config = require('../config')
const store = require('../store')
const events = require('./events')

const createGame = () => {
  return $.ajax({
    url: config.apiOrigin + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateGame = (data) => {
  const game = store.game

  return $.ajax({
    url: config.apiOrigin + '/games/' + game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  createGame,
  updateGame
}
