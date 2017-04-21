'use strict'

const store = require('../store')
const events = require('./events')

const createGameSuccess = (data) => {
  store.game = data.game
  // console.log('createGame data: ', data.game)
  $('#GameResultModal').hide()
  $('#gameboard').show()
  events.newGame
}

const createGameFailure = (error) => {
  console.error('createGameFailure ran:', error)
}

const updateGameSuccess = (data) => {
  store.game = data.game
  // console.log(store.game)
}

const updateGameFailure = (error) => {
  console.error('updateFailure ran:', error)
}

const getStatsSuccess = (data) => {
  const gameCount = data.games.length
  $('#playerX').html(store.user.email)
  $('#game-count').html(gameCount)
}

const getStatsFailure = () => {
  console.error('getGamesFailure failed')
}

module.exports = {
  createGameSuccess,
  createGameFailure,
  updateGameSuccess,
  updateGameFailure,
  getStatsSuccess,
  getStatsFailure
}
