const express = require('express')

const QuizzesControllers= require('../controllers/quizzes-controllers')

const router = express.Router()

router.post('/createQuiz', QuizzesControllers.createQuiz)
router.put('/quiz/:id', QuizzesControllers.editQuiz)
router.delete('/quiz/:id', QuizzesControllers.deleteQuiz)
router.get('/quiz/:id', QuizzesControllers.getQuizById)
router.get('/quizzes', QuizzesControllers.getQuizzes)


module.exports = router