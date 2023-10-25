module.exports = function makeGetAuserAction({User}) {
  return async function getAUserAction(req, res) {
    try {
      const getAUserResponse = await User.findById(req.params.id);
      res.send({
        status: 'success',
        data: {
          message: getAUserResponse
        }
      })
    } catch (error) {
      console.log(error)
      res.send({
        status: "fail",
        data: {
          message: error
        }
      })
    }
  }
}