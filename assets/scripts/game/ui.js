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
  console.log('getGamesSuccess ran successfuly')
}

module.exports = {
  createGameSuccess,
  createGameFailure,
  updateGameSuccess,
  updateGameFailure,
  getStatsSuccess
}
