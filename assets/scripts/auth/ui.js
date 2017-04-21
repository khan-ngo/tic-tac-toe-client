'use strict'

const store = require('../store.js')
const gameEvents = require('../game/events.js')

const signUpSuccess = (data) => {
  $('#signUpModal').hide()
  $('#signInModal').show()
  $('.authentication-stuff').show()
  $('.header-message').show().html('Congratulations, you have a new account.')
  $('.sign-in-msg').html('Log in with your new account to Play.')
  $('#sign-in').trigger('reset')
}

const signUpFailure = (error) => {
  $('#signUpError').show().html('Something\'s wrong. Try again.')
  setTimeout(function () {
    $('#signUpError').fadeOut(600)
  }, 1000)
  $('#sign-up').trigger('reset')
  console.error('signIn failed ran data is:', error)
}

const signInSuccess = (data) => {
  store.user = data.user
  // console.log(store.user)
  $('#signUpModal').hide()
  $('.header-message').hide()
  $('#signInModal').hide()
  $('.authentication-stuff').show()
  $('#gameboard').show()
  $('#salutaion-message').html('Tic Tac Toe')
  $('.nav-message').html(store.user.email + ' is Player "X"')
  gameEvents.newGame()
  $('#gameboard').show()
}

const signInFailure = (error) => {
  $('#signInError').show().html('Something\'s wrong with your login. Try again.')
  setTimeout(function () {
    $('#signInError').fadeOut(600)
  }, 1000)
  $('#sign-in').trigger('reset')
  console.error('signIn failed ran data is:', error)
}

const signOutSuccess = () => {
  store.user = null
  $('#gameboard').hide()
  $('.nav-btns').hide()
  $('#gameResultModal').hide()
  $('#salutaion-message').show()
  $('#salutaion-message').html('Good-Bye')
  $('.header-message').html('Thank you for playing. Come again soon.')
  $('#change-password').trigger('reset')
}

const signOutFailure = (error) => {
  $('#change-password').trigger('reset')
  console.error('signOutFailure ran:', error)
}

const changePasswordSuccess = () => {
  $('#ChangePasswordSuccess').show().html('Password changed! Close Modal to continue.')
  $('#ChangePasswordError').hide()
  $('.form-group-pw').hide()
  $('#top-message').show().html(store.user.email + ' - You successfully Changed your password.')
}

const changePasswordFailure = (error) => {
  $('#ChangePasswordError').show().html('Check your password and try again.')
  setTimeout(function () {
    $('#ChangePasswordError').fadeOut(600)
  }, 1000)
  $('#change-password').trigger('reset')

  console.error('changePasswordFailure ran:', error)
}

setTimeout(function (id) {
  $(id).fadeOut(600)
}, 1000)

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
