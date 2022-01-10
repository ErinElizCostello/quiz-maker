// const Login = require('../models/signUpAndLogin-model')
// const jwt = require('jsonwebtoken')

// getUser = async (req, res) => {

//   await Login.findOne({ username: req.body.username }, (err, user) => {
//     if (err) {
//       return res.status(400).json({ success: false, error: err })
//     }

//     if (!user) {
//       return res
//         .status(404)
//         .json({ success: false, error: `user does not exist` })
//     }

//     const payload = {
//       id: user._id,
//       user: user.username,
//       iat: Date.now(),
//     };

//     bcrypt.compare(req.body.password, user.password, function (err, theUser) {
//       if (err) {
//         return err
//       }
//       if (theUser) {
//         const token = jwt.sign({
//           id: user._id,
//           user: user.username,
//           iat: Math.floor(Date.now() / 1000),
//         }, process.env.ACCESS_TOKEN_SECRET, 
//         { expiresIn: '1d' }
//         );
        
//         return res.send({ payload, token });
//       } else {
//         return res.json({ success: false, message: 'passwords do not match' });
//       }
//     })
//   }).catch(err => console.log(err))
// }

// getAllUsers = async (req, res) => {
//   await Login.find({}, (err, users) => {
//     if (err) {
//       return res.status(400).json({ success: false, error: err })
//     }
//     if (!users.length) {
//       return res
//         .status(404)
//         .json({ success: false, error: `No users found` })
//     }
//     return res.status(200).json({ success: true, data: users })
//   }).catch(err => console.log(err))
// }

// module.exports = {
//   getUser,
//   getAllUsers
// }