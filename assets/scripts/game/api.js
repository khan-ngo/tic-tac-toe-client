'use strict'
const config = require('../config')
const store = require('../store')

const createGame = () => {
  console.log('I am in createGame')
  return $.ajax({
    url: config.apiOrigin + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateGame = (data) => {
  console.log('I am in updateGame. store is :', store)
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

// const changePassword = (data) => {
//   console.log('changePassword ran - store is: ', store)
//   return $.ajax({
//     url: config.apiOrigin + '/change-password/' + store.user.id,
//     method: 'PATCH',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     },
//     data
//   })
// }

module.exports = {
  createGame,
  updateGame
}
