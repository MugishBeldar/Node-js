module.exports = function makeRegisterUser({Joi}) {
  return async function registerUser({role, firstName, lastName,email , password, confirmPassword}) {
      const userValidateValue = validation({role, firstName, lastName, email, password, confirmPassword})
  }

  function validation({role, firstName, lastName, email, password, confirmPassword})
  {
    const schema = Joi.object({
      role: Joi.string().valid('admin', 'user').required(),
      firstName: Joi.string().required(),
      lastName: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().min(8).required(),
      confirmPassword: Joi.string().valid(Joi.ref('password')).required(),
    });
    const { value ,error } = schema.validate({ role, firstName, lastName, email, password, confirmPassword });
    if (error) {
      throw `Validation error: ${error.details[0].message}`;
    }
    return value;
  }
}