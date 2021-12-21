const theUser = require('../models/signUpAndLogin-model')
const usersQuizzess = require('../models/quizzes-model')


deleteUser = async (req, res) => {
  await theUser.findOneAndDelete({ username: req.params.user }, (err, user) => {
    if (err) {
      return res.status(400).json({ success: false, error: err })
    }

    if (!user) {
      return res
        .status(404)
        .json({ success: false, error: `User not found` })
    }

    usersQuizzess.deleteMany({ user: req.params.user }, (err, quizzes) => {
      if (err) {
        return res.status(400).json({ success: false, error: err })
      }
  
      return res.status(200).json({ success: true, data: {user, quizzes} })
    })
  }).catch(err => console.log(err))
}

module.exports = {
  deleteUser
}