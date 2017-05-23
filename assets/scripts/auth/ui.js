'use strict'

const store = require('../store.js')
const gameEvents = require('../game/events.js')

const signUpSuccess = (data) => {
  $('.form-control').val('')

  $('#signUpModal').hide()
  $('#signInModal').show()
  $('.form-control').val('')
  $('.authentication-stuff').show()
  $('.header-message').show().html('Congratulations, you have a new account.')
  $('.sign-in-msg').html('Log in with your new account to Play.')
  $('#sign-in').trigger('reset')
}

const signUpFailure = (error) => {
  $('.form-control').val('')

  $('#signUpError').show().html('Something\'s wrong. Try again.')
  setTimeout(function () {
    $('#signUpError').fadeOut(700)
  }, 1000)
  $('#sign-up').trigger('reset')
  console.error('signIn failed ran data is:', error)
}

const signInSuccess = (data) => {
  store.user = data.user
  // console.log(store.user)
  $('.form-control').val('')

  $('#signUpModal').hide()
  $('.header-message').hide()
  $('#signInModal').hide()
  $('.authentication-stuff').show()
  $('#gameboard').show()
  $('#salutaion-message').html('Tic Tac Toe')
  $('.nav-message').html(store.user.email + ' is Player "X"')
  gameEvents.initalizeGameboard()
  gameEvents.newGame()
  $('#ChangePasswordSuccess').hide()
  $('#change-password').trigger('reset')
  $('#gameboard').show()
}

const signInFailure = (error) => {
  $('.form-control').val('')

  $('#signInError').show().html('Something\'s wrong with your login. Try again.')
  setTimeout(function () {
    $('#signInError').fadeOut(700)
  }, 1000)
  $('#sign-in').trigger('reset')
  console.error('signIn failed ran data is:', error)
}

const changePasswordSuccess = () => {
  $('.form-control').val('')

  $('#ChangePasswordError').hide()
  $('#ChangePasswordSuccess').show().html('Password changed! Close Modal to continue.')
  setTimeout(function () {
    $('#ChangePasswordSuccess').fadeOut(2000)
  }, 2000)
  $('#change-password').trigger('reset')
}

const changePasswordFailure = (error) => {
  $('.form-control').val('')

  $('#ChangePasswordError').show().html('Check your password and try again.')
  setTimeout(function () {
    $('#ChangePasswordError').fadeOut(700)
  }, 1000)
  $('#change-password').trigger('reset')
  console.error('changePasswordFailure ran:', error)
}

const signOutSuccess = () => {
  store.user = null
  gameEvents.initalizeGameboard()
  $('.form-control').val('')
  $('#gameboard').hide()
  $('.nav-btns').hide()
  $('#gameResultModal').hide()
  $('#salutaion-message').show()
  $('#salutaion-message').html('Good-Bye')
  $('.header-message').show().html('Thank you for playing. Come back soon.')
  $('#signUpModal').hide()
  $('#signInModal').show()
  $('#signInModal').trigger('reset')
  gameEvents.restStats()
}

const signOutFailure = (error) => {
  $('#change-password').trigger('reset')
  console.error('signOutFailure ran:', error)
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
