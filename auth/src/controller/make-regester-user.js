module.exports = function makeRegisterUserAction({registerUser}) {
  return async function registerUserAction(req, res) {
    try {
      console.log("makeRegisterUser controller...",req.body);
        const {role, firstName, lastName, email, password, confirmPassword} = req.body;
        const registerUserResponse = await registerUser({role, firstName, lastName, email, password, confirmPassword});
  
        res.send({
            statusCode:200,
            data: {
              
            }
        })
    } catch (error) {
      res.send({
        statusCode:400,
        data: {
          Error: error
        }
      })
    }
  }
}