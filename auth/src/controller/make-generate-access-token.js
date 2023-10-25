module.exports = function makeGenerateAccessToken({jwt, constants}) {
  return async function generateAccessToken(req, res) {
      const user = {
        userName: req.body.userName,
        password: req.body.password,
      }
      const token = jwt.sign({user}, constants.secretKey, {expiresIn: constants.expiresIn});
      res.send({
          statusCode:200,
          data: {
            accessToken: token
          }
      })
  }
}