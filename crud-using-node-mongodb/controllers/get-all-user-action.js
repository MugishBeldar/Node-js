module.exports = function makeGetAllUserAction({User}) {
  return async function getAuserAction(req, res) {
    try {
      const getAllUserResponse  = await User.find();
      res.send({
        status: 'success',
        data: {
          message: getAllUserResponse,
        }
      })
    } catch (error) {
      res.send({
        status: 'fail',
        data: {
          message: error,
        }
      })
    }
  }
}