console.log('usecase called...........')
global.logger = console.log;
const Joi = require('joi');
const {userTable} = require('../data-access')

const makeTest = require('./test.js')
const test = makeTest();

const makeRegisterUser = require('./register-user');
const registerUser = makeRegisterUser({Joi});
module.exports = Object.freeze({
    test,
    registerUser,
})