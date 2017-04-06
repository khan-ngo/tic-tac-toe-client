'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

$(() => {
  setAPIOrigin(location, config)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')

//
// const gameEvents = require('./game/ticTacToe.js')
const authEvents = require('./auth/events.js')

// ON.document ready
$(() => {
  // gameEvents.startGame()
  authEvents.addHandlers()
  // authenEvents.addHandlers()
})
