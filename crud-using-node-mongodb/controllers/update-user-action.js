module.exports = function makeUpdateUserAction({ User }) {
  return async function updateUserAction(req, res) {
    try {
      const updateUserResponse = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      })
      res.send({
        status: 'success',
        data: {
          message: updateUserResponse
        }
      })
    } catch (error) {
      res.send({
        status: "fail",
        data: {
          message: error.message
        }
      })
    }
  }
}