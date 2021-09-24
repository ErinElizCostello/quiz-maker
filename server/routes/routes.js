const express = require('express')

const QuizzesControllers= require('../controllers/quizzes-controllers')
const LoginControllers= require('../controllers/login-controllers')
const SignUpControllers= require('../controllers/signUp-controllers')
const VerifyControllers = require('../controllers/verify-controllers')

const router = express.Router()

router.get('/quizzes', QuizzesControllers.getQuizzes)
router.get('/quiz/:id', QuizzesControllers.getQuizById)
router.post('/createQuiz', QuizzesControllers.createQuiz)
router.delete('/deleteQuiz/:id', QuizzesControllers.deleteQuiz)
router.put('/editQuiz/:id', QuizzesControllers.editQuiz)


router.post('/myQuizzes', QuizzesControllers.getQuizzesByUser)

router.get('/getAllUsers', LoginControllers.getAllUsers)
router.post('/login', LoginControllers.getUser)
router.post('/signUp', SignUpControllers.createNewUser)

router.get('/verify/:token', VerifyControllers.verifyUser)

module.exports = router