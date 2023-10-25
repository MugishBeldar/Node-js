module.exports = async function makeUserTable() {
  return {
    createUser,
  }
}

async function createUser() {
  console.log('createUser called');
}