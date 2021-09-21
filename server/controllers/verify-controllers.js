const jwt = require('jsonwebtoken')

verifyUser = (req, res) => {
  const { token } = req.params
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, jwt) => {
    if(err){
      res.send(err.message)
    }else{
      res.send(jwt)
    }
  })
}


module.exports = {
  verifyUser
}
