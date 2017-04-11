'use strict'

const store = require('../store')

const createGameSuccess = (data) => {
  console.log('createSuccess ran')
  store.game = data.game
  console.log(store.game)
}

const createGameFailure = (error) => {
  console.error('createFailure ran:', error)
}

const updateGameSuccess = (data) => {
  console.log('updateSuccess ran')
  store.game = data.game
  console.log(store.game)
}

const updateGameFailure = (error) => {
  console.error('updateFailure ran:', error)
}

module.exports = {
  createGameSuccess,
  createGameFailure,
  updateGameSuccess,
  updateGameFailure
}
