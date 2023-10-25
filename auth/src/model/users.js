module.exports = async function makeUserModel() {
  return {
    createUser,
  }
}

async function createUser() {
  console.log('createUser called');
}