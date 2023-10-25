module.exports = function makeDeleteUserAction({ User }) {
  return async function deleteUserAction(req, res) {
    try {
      const deleteUserResponse = await User.findByIdAndDelete(req.params.id);
      res.send({
        status: 'success',
        data: {
          message: deleteUserResponse
        }
      })
    } catch (error) {
      res.send({
        status: "fail",
        data: {
          message: error.message,
        }
      })
    }
  }
}