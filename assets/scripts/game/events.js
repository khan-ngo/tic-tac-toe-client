'use strict'

const ui = require('./ui')
const api = require('./api')

let xWinCount = 0
let oWinCount = 0

document.turn = 'X'
document.winner = null

const setMessage = function (msg) {
  document.getElementById('message').innerText = msg
}

const setResultMessage = function (msg) {
  document.getElementById('GameResultModalMessage').innerText = msg
}

const setWinStatX = function (msg) {
  document.getElementById('game-stats-X').innerText = msg
}

const setWinStatO = function (msg) {
  document.getElementById('game-stats-O').innerText = msg
}

setMessage('Player "' + document.turn + '" - It\'s your turn to start.')

const startGame = function () {
  for (let i = 0; i <= 8; i++) {
    clearBox(i)
  }
  document.winner = null
  setMessage('Player "' + document.turn + '" - It\'s your turn to start.')
}

const playerMove = function () {
  nextMove(this)
}

const nextMove = function (square) {
  if (document.winner != null) {
    setMessage('Player "' + document.turn + '" already won. Click "Start New Game" below.')
  } else if (square.innerText === '') {
    square.innerText = document.turn

    // preparing values for api call
    const updateValue = document.turn
    const squareId = square.id
    const indexValue = squareId.replace('s', '')

    // create data structure expected by api
    const data = {
      'game': {
        'cell': {
          'index': indexValue,
          'value': updateValue
        },
        'over': false
      }
    }

    // send update request to api for game
    api.updateGame(data)
    .then(ui.updateGameSuccess)
    .then(ui.updateGameFailu)

    switchTurn()
  } else if (square.innerText === 'X' || square.innerText === 'O') {
    setMessage('Select an empty square.')
  }
}

// switch document.turn from X to O and vice versa
const switchTurn = function () {
  if (checkForWinner(document.turn)) {
    document.winner = document.turn
    winnerFound()
  } else if (checkGameOver()) {
    tiedGame()
  } else if (document.turn === 'X') {
    document.turn = 'O'
    setMessage('Player "' + document.turn + '" - It\'s your turn.')
  } else {
    document.turn = 'X'
    setMessage('Player "' + document.turn + '" - It\'s your turn.')
  }
}

const checkForWinner = function (move) {
  let result = false

  if (checkRow(0, 1, 2, move) ||
  checkRow(3, 4, 5, move) ||
  checkRow(6, 7, 8, move) ||
  checkRow(0, 3, 6, move) ||
  checkRow(1, 4, 7, move) ||
  checkRow(2, 5, 8, move) ||
  checkRow(0, 4, 8, move) ||
  checkRow(2, 4, 6, move)) {
    result = true
  }
  return result
}

const checkGameOver = function () {
  let result = false

  if (document.getElementById('s0').innerText !== '' &&
  document.getElementById('s1').innerText !== '' &&
  document.getElementById('s2').innerText !== '' &&
  document.getElementById('s3').innerText !== '' &&
  document.getElementById('s4').innerText !== '' &&
  document.getElementById('s5').innerText !== '' &&
  document.getElementById('s6').innerText !== '' &&
  document.getElementById('s7').innerText !== '' &&
  document.getElementById('s8').innerText !== '') {
    result = true
  }
  return result
}

const winnerFound = function () {
  $('#gameboard').show()
  $('#gameResultModal').show()

  if (document.turn === 'X') {
    xWinCount++
  } else {
    oWinCount++
  }

  printWinStats()

  // create data structure expected by api
  const data = {
    'game': {
      'over': true
    }
  }
  // send update request to api for game
  api.updateGame(data)
  api.index()
    .then(ui.getStatsSuccess)
    .catch(ui.getStatsSuccess)
}

const printWinStats = function () {
  setMessage('Great Job, Player "' + document.turn + '" !')

  setResultMessage('Player "' + document.turn + '" won!')
  setWinStatO('Player "O" has ' + oWinCount + ' wins')
  setWinStatX('Player "X" has ' + xWinCount + ' wins')
}

const tiedGame = function () {
  // $('#gameboard').show()
  $('#gameResultModal').show()

  setResultMessage('Cats Game - You tied!')
  setMessage('Cats Game - You tied!')

  api.index()
    .then(ui.getStatsSuccess)
    .catch(ui.getStatsFailure)
}

const newGame = function () {
  $('#gameResultModal').hide()
  $('#gameboard').show()
  $('.nav-btns').show()
  api.createGame()
    .then(ui.createGameSuccess)
    .catch(ui.CreateGameFailure)
}

const OnNewGame = function (event) {
  event.preventDefault()
  // const data = getFormFields(this)

  startGame()
  newGame()
}

// compare and return boolean (true or false)
const checkRow = function (a, b, c, move) {
  let result = false

  if (getBox(a) === move && getBox(b) === move && getBox(c) === move) {
    result = true
  }
  return result
}

// return the value of the row
const getBox = function (number) {
  return document.getElementById('s' + number).innerText
}

const clearBox = function (number) {
  document.getElementById('s' + number).innerText = ''
}

const returnToLogIn = function () {
  $('#signUpModal').hide()
  $('sign-in').trigger('reset')
  $('#signInModal').show()
}

const onChangePassword = function () {
  $('#top-message').hide()
}

const addHandlers = function () {
  $('#new-game').on('click', OnNewGame)
  $('#s0').on('click', playerMove)
  $('#s1').on('click', playerMove)
  $('#s2').on('click', playerMove)
  $('#s3').on('click', playerMove)
  $('#s4').on('click', playerMove)
  $('#s5').on('click', playerMove)
  $('#s6').on('click', playerMove)
  $('#s7').on('click', playerMove)
  $('#s8').on('click', playerMove)
  $('#return-to-log-in').on('click', returnToLogIn)
  $('#changePasswordModalClose').on('click', onChangePassword)
}

module.exports = {
  addHandlers,
  startGame,
  OnNewGame,
  newGame
}
