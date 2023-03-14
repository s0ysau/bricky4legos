require('dotenv').config()
require('./config/database')
const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')
const PORT = process.env.PORT || 8080

const app = express()

app.use(express.json())
app.use((req, res, next) => {
  res.locals.data = {}
  next()
})

app.use(logger('dev'))
app.use(require('./config/checkToken'))

app.get('/api/profile', require('./routes/api/profile'))

app.get('/api/test', (req, res) => {
  res.json({'eureka': 'you have found it'})
})


app.listen(PORT, () => {
  console.log(`Getting Bricky for Legos in ${PORT}`)
})

