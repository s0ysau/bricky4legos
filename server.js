require('dotenv').config()
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 8080



const app = express()


app.use(express.json())
app.use((req, res, next) => {
  res.locals.data = {}
  next()
})


app.get('/api/test', (req, res) => {
  res.json({'eureka': 'you have found it'})
})

app.listen(PORT, () => {
  console.log(`Getting Bricky for Legos in ${PORT}`)
})