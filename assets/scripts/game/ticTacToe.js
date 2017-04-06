
console.log('inside scripts/index.js ..... YAHHH')

const startGame = function () {
  console.log('inside StartGame Function')
  for (let i = 1; i <= 9; i++) {
    clearBox(i)
    console.log(i)
  }

  document.turn = 'X'
  document.winner = null

  setMessage(document.turn + ' - It\'s your turn to start.')
}

const setMessage = function (msg) {
  document.getElementById('message').innerText = msg
}

const nextMove = function (square) {
  console.log('inside nextMove')
  if (document.winner != null) {
    setMessage(document.turn + ' already won. This game is over.')
  } else if (square.innerText === '') {
    square.innerText = document.turn
    switchTurn()
  } else {
    setMessage(document.turn + ' - Pick another different square.')
  }
}

// switch document.turn from X to O and vice versa
const switchTurn = function () {
  if (checkForWinner(document.turn)) {
    setMessage('Congratulations ' + document.turn + ', you won!')
    document.winner = document.turn
  } else if (document.turn === 'X') {
    document.turn = 'O'
    setMessage(document.turn + ' - It\'s your turn!')
  } else {
    document.turn = 'X'
    setMessage(document.turn + ' - It\'s your turn!')
  }
}

const checkForWinner = function (move) {
  let result = false

  if (checkRow(1, 2, 3, move) ||
  checkRow(4, 5, 6, move) ||
  checkRow(7, 8, 9, move) ||
  checkRow(1, 4, 7, move) ||
  checkRow(2, 5, 8, move) ||
  checkRow(1, 5, 9, move) ||
  checkRow(3, 5, 7, move) ||
  checkRow(3, 6, 9, move)) {
    result = true
  }
  return result
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

startGame()

// module.exports = {
//   nextMove,
//   setMessage,
//   switchTurn,
//   checkForWinner,
//   checkRow,
//   getBox,
//   clearBox
// }

startGame()

console.log('Read the End of scripts/index.js ..... YAHHH')
