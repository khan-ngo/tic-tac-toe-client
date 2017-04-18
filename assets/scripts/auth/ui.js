'use strict'

const store = require('../store.js')
const gameEvents = require('../game/events.js')

const signUpSuccess = (data) => {
  $('#signUpModal').hide()
  $('#header-message').hide()
  $('#signInModal').show()
  $('#header-message').show()
  $('.authentication-stuff').show()
  $('#gameboard').show()
  $('#header-message').html('Congratulations, you have a new account. Please log in.')
}

const signUpFailure = (error) => {
  $('#tempSignUpError').html('Something is wrong. Please try to again.')
  console.log('signIn failed ran data is:', error)
}

const signInSuccess = (data) => {
  store.user = data.user
  console.log(store.user)

  $('#signUpModal').hide()
  $('#header-message').hide()
  $('#signInModal').hide()
  $('#header-message').show()
  $('.authentication-stuff').show()
  $('#gameboard').show()
  $('#salutaion-message').html('Tic Tac Toe')
  $('#header-message').html(store.user.email + ', you are Player "X"')
  gameEvents.newGame()
  $('#gameboard').show()
}

const signInFailure = (error) => {
  $('#tempSignInError').html('Something is wrong. Please try to again.')
  console.error('signIn failed ran data is:', error)
}

const signOutSuccess = () => {
  store.user = null
  $('#gameboard').hide()
  $('.nav-btns').hide()
  $('#salutaion-message').show()
  $('#salutaion-message').html('Good-Bye')
  $('#header-message').html('Thank you for playing. Come again soon.')
}

const signOutFailure = (error) => {
  console.error('signOutFailure ran:', error)
}

const changePasswordSuccess = () => {
  console.log('changePasswordSuccess ran')
  $('#tempChangePasswordSuccess').html('Password changed! Close Modal to continue.')
  $('#tempChangePasswordError').hide()
  $('.form-group-pw').hide()
  $('#top-message').html(store.user.email + ' - You successfully Changed your password.')
}

const changePasswordFailure = (error) => {
  $('#tempChangePasswordError').html('Somthings wrong. Check your password and try again.')
  console.error('changePasswordFailure ran:', error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}
