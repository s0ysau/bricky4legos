const User = require('../models/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const checkToken = (req, res) => {
  console.log('req.user', req.user)
  res.json(req.exp)
}

const dataCtrl = {
  async create (req, res, next){
    try {
      const user = await User.create(req.body)
      const token = createJWT(user)
      req.locals.data.user = user
      req.locals.data.token = token
      next()
    } catch (error) {
      console.log("error", error)
      res.status(400).json(error)
    }
  }, 
  async login (req, res, next) {
    try {
      const user = await User.findOne({ username: req.body.username })
      if (!user) throw new Error()
      const match = await bcrypt.compare(req.body.password, user.password)
      if (!match) throw new Error()
      req.locals.data.user = user
      req.locals.data.token = createJWT(user)
      next()
    } catch (error) {
      res.status.json('Bad Credentials')
    }
  }
}

const apiCtrl = {
  auth(req, res){
    res.json(res.locals.data.token)
  }
}

module.exports = {
  checkToken, 
  dataCtrl,
  apiCtrl
}

const createJWT = (user) => {
  return jwt.sign(
    { user },
    process.env.SECRET,
    { expiresIn: '24h' }
  )
}