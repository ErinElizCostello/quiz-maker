const express = require('express')

const QuizzesControllers= require('../controllers/quizzes-controllers')
const LoginControllers= require('../controllers/login-controllers')
const SignUpControllers= require('../controllers/signUp-controllers')

const router = express.Router()

router.post('/createQuiz', QuizzesControllers.createQuiz)
router.put('/quiz/:id', QuizzesControllers.editQuiz)
router.delete('/quiz/:id', QuizzesControllers.deleteQuiz)
router.get('/quiz/:id', QuizzesControllers.getQuizById)
router.get('/quizzes', QuizzesControllers.getQuizzes)

router.get('/getAllUsers', LoginControllers.getAllUsers)
router.post('/login', LoginControllers.getUser)
router.post('/signUp', SignUpControllers.createNewUser)

module.exports = router