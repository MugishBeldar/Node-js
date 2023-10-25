module.exports = function testAction({}) {
  return async function test(req, res) {
    try {
      console.log('test action');
      res.send({
        status: 'success',
        data: {
          message: "test action"
        }
      })
    } catch (error) {
      res.send({
        status: "fail",
        data: {
          message: error
        }
      })
    }
  }
}