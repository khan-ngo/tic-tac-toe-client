'use strict'

const store = require('../store.js')

const signUpSuccess = (data) => {
  console.log('signUpSuccess ran: ', data)
}

const signUpFailure = (error) => {
  console.error('signUpFailure ran: ', error)
}

const signInSuccess = (data) => {
  store.user = data.user
}

const signInFailure = (error) => {
  console.error('signIn failed ran data is:', error)
}

const signOutSuccess = () => {
  store.user = null
}

const signOutFailure = (error) => {
  console.error('signOutFailure ran:', error)
}

const changePasswordSuccess = () => {
  console.log('changePasswordSuccess ran')
}

const changePasswordFailure = (error) => {
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
