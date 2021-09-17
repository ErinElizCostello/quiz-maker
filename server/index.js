const express = require('express')
const cors = require('cors')
const app = express()
const db = require('./db')
const quizzesRouter = require('./routes/routes')

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(cors())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })

app.use('/', quizzesRouter)

const PORT = process.env.PORT || 3001

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))