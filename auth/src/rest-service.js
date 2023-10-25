const controller = require('./controller')
const express = require('express');
const router = express.Router();
const {authentication} = require('./middleware')

// ALL API ENDPOINTS
router.get('/test',controller.testControllerAction)
router.post('/token', controller.generateAccessToken)
router.post('/profile', authentication ,controller.profileControllerAction)
router.post('/register', authentication ,controller.registerUserAction)
module.exports = {router}

