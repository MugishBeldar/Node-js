console.log("data access index.js called.........................")

const makeUserTable = require('./user-table');
const userTable = makeUserTable({});

module.exports = {
  userTable,
};

