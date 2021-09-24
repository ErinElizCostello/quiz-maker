const jwt = require('jsonwebtoken')

verifyUser = (req, res) => {
  const { token } = req.params

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, jwt) => {
    return res.status(200).send({ err: err, result: jwt, });
  });
}


module.exports = {
  verifyUser
}
