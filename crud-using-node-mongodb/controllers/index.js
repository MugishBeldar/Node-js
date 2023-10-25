const {User} = require('../models')

const testAction = require("./test-action");
const test = testAction({});

const makeCreateUserAction = require('./create-user-action');
const createUserAction = makeCreateUserAction({User});

const makeGetAllUserAction = require('./get-all-user-action');
const getAllUserAction = makeGetAllUserAction({User});

const makeGetAiserAction = require('./get-a-user-action');
const getAuserAction = makeGetAiserAction({User});

const makeUpdateUserAction = require('./update-user-action');
const updateUserAction = makeUpdateUserAction({User});

const makeDeleteUserAction = require('./delete-user-action');
const deleteUserAction = makeDeleteUserAction({User});

module.exports = {
  test,
  createUserAction,
  getAllUserAction,
  getAuserAction,
  updateUserAction,
  deleteUserAction
}