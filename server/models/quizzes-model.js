const mongoose = require('mongoose')
const Schema = mongoose.Schema


const Quizzes = new Schema(
    {
        user: { type: String, required: true },
        title: { type: String, required: true },
        quiz: { type: Object, required: true },
        results: { type: Object, required: true },
    },
    { timestamps: true },
)


module.exports = mongoose.model('quizzes', Quizzes)