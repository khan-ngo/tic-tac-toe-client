'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const authEvents = require('./auth/events.js')
const gameEvents = require('./game/events.js')

// const gameLogic = require('./game/gameLogic.js')

$(() => {
  setAPIOrigin(location, config)
  authEvents.addHandlers()
  gameEvents.addHandlers()
  // gameLogic.logicHandler()
  // $('#new-game').on('submit', gameLogic.newGame)
  // $('#play-again').on('submit', gameLogic.playAgain)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')

// Initialize Splash Page
$(() => {
  $('#gameboard').hide()
  $('#gameResultModal').hide()
  $('.nav-btns').hide()
  $('#Game-message').show()
  $('#signUpModal').hide()
  $('#signInModal').show()
  $('#sign-in').trigger('reset')
})
