console.log('controller called............')
const {test, registerUser} = require('../usecases');
const jwt = require('jsonwebtoken');
const constants = require('../constant');

const makeTestControllerAction = require('./test-controller');
const testControllerAction = makeTestControllerAction({test: test});

const makeGenerateAccessToken = require('./make-generate-access-token');
const generateAccessToken = makeGenerateAccessToken({jwt, constants});

const makeRegisterUserAction = require('./make-regester-user');
const registerUserAction = makeRegisterUserAction({registerUser});

const makeProfileControllerAction = require('./profile');
const profileControllerAction = makeProfileControllerAction({jwt, constants});

module.exports = Object.freeze({
    testControllerAction,
    generateAccessToken,
    profileControllerAction,
    registerUserAction,
})