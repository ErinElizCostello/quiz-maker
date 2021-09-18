const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Quizzes = new Schema(
    {
        // id: { type: String, required: true },
        user: { type: String, required: true },
        title: { type: String, required: true },
        // time: { type: Number, required: true },
        quiz: { type: Object, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('quizzes', Quizzes)