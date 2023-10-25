module.exports = function makeCreateUserAction({User}) {
  return async function createUserAction(req, res) {
    try {
      const createUserResponse  = await User.create(req.body);
      res.send({
        status: 'success',
        data: {
          message: createUserResponse,
        }
      })
    } catch (error) {
      res.send({
        status: 'fail',
        data: {
          message: error.message,
        }
      })
    }
  }
}