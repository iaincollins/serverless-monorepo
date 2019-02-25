const { send } = require('micro')

module.exports = async (req, res) => {
  const statusCode = 200
  const data = { test: `The date and time is ${new Date().toString()}` }
  send(res, statusCode, data)
}