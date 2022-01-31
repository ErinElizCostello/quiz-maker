require('dotenv').config({path: '/env'})
const express = require('express')
const cors = require('cors')
const app = express()
const db = require('./db')
const router = require('./routes/routes')
const path = require('path')


app.use(express.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.use(cors())
app.options('*', cors());

app.use(express.urlencoded({
  extended: true
}));

app.use(cors())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.use('/', router)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('build'));
  app.get('*', (req, res) => {
    res.sendFile(path.join('build', 'public', 'index.html'));
  });
}

const PORT = process.env.PORT || 3001

app.listen(PORT)