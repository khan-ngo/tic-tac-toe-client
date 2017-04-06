'use strict'

const store = require('../store')

const signUpSuccess = (data) => {
  console.log(data)
}

const signUpFailure = (error) => {
  console.error(error)
}

const signInSuccess = (data) => {
  console.log('You logged in Successfully. data: ', data)
  console.log('You logged in Successfully. store: ', store)
  store.user = data.user
  console.log('Sign in successful')
}

const signInFailure = (error) => {
  console.error(error)
}

const changePasswordSuccess = (data) => {
  console.log('You Successfully Changed your Password. data: ', data)
  console.log('You Successfully Changed your Password. store: ', store)
  store.user = data.user
  console.log('ChangePassword successful')
}

const changePasswordFailure = (error) => {
  console.error(error)
}

const signOutSuccess = () => {
  console.log('You logged OUT !!! Successfully.')
  console.log('store is: ', store)
  store.user = null
  console.log('store is: ', store)
}

const signOutFailure = (error) => {
  console.error(error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
