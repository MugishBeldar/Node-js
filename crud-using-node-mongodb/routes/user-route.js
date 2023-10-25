const controller = require('../controllers')
const express = require('express');
const router = express.Router();
// const {authentication} = require('./middleware')

// ALL API ENDPOINTS
router.get('/test', controller.test)
router.post('/createuser', controller.createUserAction)
router.get('/getalluser', controller.getAllUserAction)
router.get('/getauser/:id', controller.getAuserAction)
router.put('/updateuser/:id', controller.updateUserAction)
router.delete('/deleteuser/:id', controller.deleteUserAction)

// router.post('/profile', authentication ,controller.profileControllerAction)
// router.post('/register', authentication ,controller.registerUserAction)
module.exports = { router }