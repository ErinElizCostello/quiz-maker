const SignUp = require('../models/signUpAndLogin-model')
bcrypt = require('bcrypt'),
  SALT_WORK_FACTOR = 10;

createNewUser = async (req, res) => {
  const body = req.body

  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'No user was provided',
    })
  }

  ////

  await SignUp.findOne({ username: body.username }, (err, user) => {
    if (err) {
      return res.status(400).json({ success: false, error: err })
    }

    if (user) {
      return res
        .status(404)
        .json({ success: false, error: `username is already taken, pick a new one` })
    } else {







      /////

      bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
        if (err) return err;

        bcrypt.hash(body.password, salt, function (err, hash) {
          if (err) return next(err);

          body.password = hash;

          const user = new SignUp(body)

          if (!user) {
            return res.status(400).json({ success: false, error: err })
          }

          user
            .save()
            .then(() => {
              return res.status(201).json({
                success: true,
                user: user,
                message: 'New user created',
              })
            })
            .catch(error => {
              return res.status(400).json({
                error,
                message: 'New user not created',
              })
            })
        });
      });
    }
  })
}

module.exports = {
  createNewUser
}



//   await SignUp.findOne({ username: req.body.username }, (err, user) => {
  //     if (err) {
  //         return res.status(400).json({ success: false, error: err })
  //     }

  //     if (user) {
  //         return res
  //             .status(404)
  //             .json({ success: false, error: `user already exists` })
  //     }
  //     // return res.status(200).json({ success: true, data: user })
  // }).catch(err => console.log(err))