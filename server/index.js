require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const db = require('./db')
const router = require('./routes/routes')
const path = require('path')

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(cors())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.use('/', router)

if (process.env.node_ENV === 'production') {
  app.use(express.static('src/build'))
  app.get('*', () => (req, res) => {
    res.sendFile(path.resolve(__dirname, 'src', 'build', 'index.html'))
  })
}

const PORT = process.env.PORT || 3001

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))