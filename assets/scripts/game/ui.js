'use strict'
const store = require('../store')

const createSuccess = (data) => {
  console.log('createSuccess ran')
  store.game = data.game
  console.log(store.game)
}
const createFailure = (error) => {
  console.error('createFailure ran:', error)
}

const updateSuccess = (data) => {
  console.log('updateSuccess ran')
  store.game = data.game
  console.log(store.game)
}
const updateFailure = (error) => {
  console.error('updateFailure ran:', error)
}

module.exports = {
  createSuccess,
  createFailure,
  updateSuccess,
  updateFailure
}
