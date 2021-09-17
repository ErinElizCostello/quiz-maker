const Quizzes = require('../models/quizzes-model')

createQuiz = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'No quiz was provided',
        })
    }

    const quiz = new Quizzes(body)

    if (!quiz) {
        return res.status(400).json({ success: false, error: err })
    }

    quiz
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: quiz.id,
                message: 'Quiz successfully created',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Quiz not created',
            })
        })
}



deleteQuiz = async (req, res) => {
    await Quizzes.findOneAndDelete({ _id: req.params.id }, (err, quiz) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!quiz) {
            return res
                .status(404)
                .json({ success: false, error: `Quiz not found` })
        }

        return res.status(200).json({ success: true, data: quiz })
    }).catch(err => console.log(err))
}

getQuizById = async (req, res) => {
    await Quizzes.findOne({ _id: req.params.id }, (err, quiz) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!quiz) {
            return res
                .status(404)
                .json({ success: false, error: `Quiz not found` })
        }
        return res.status(200).json({ success: true, data: quiz })
    }).catch(err => console.log(err))
}

getQuizzes = async (req, res) => {
    await Quizzes.find({}, (err, quizzes) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!quizzes.length) {
            return res
                .status(404)
                .json({ success: false, error: `No quizzes found` })
        }
        return res.status(200).json({ success: true, data: quizzes })
    }).catch(err => console.log(err))
}

editQuiz = async (req, res) => {
  const body = req.body

  if (!body) {
      return res.status(400).json({
          success: false,
          error: 'You must provide a quiz to edit',
      })
  }

  Quizzes.findOne({ _id: req.params.id }, (err, quiz) => {
      if (err) {
          return res.status(404).json({
              err,
              message: 'Quiz not found!',
          })
      }

      quiz.quiz = body.quiz
      
      quiz
          .save()
          .then(() => {
              return res.status(200).json({
                  success: true,
                  id: quiz._id,
                  message: 'Quiz successfully edited',
              })
          })
          .catch(error => {
              return res.status(404).json({
                  error,
                  message: 'Quiz not edited',
              })
          })
  })
}


module.exports = {
    createQuiz,
    deleteQuiz,
    getQuizzes,
    getQuizById,
    editQuiz
}