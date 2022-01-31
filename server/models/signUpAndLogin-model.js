const mongoose = require('mongoose')
const Schema = mongoose.Schema


const SignUpAndLogin = new Schema(
    {
        username: { type: String, required: true, index: { unique: true } },
        password: { type: String, required: true },
    },
    { timestamps: true },
)


module.exports = mongoose.model('signUpAndLogin', SignUpAndLogin)