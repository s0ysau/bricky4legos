const User = require('../models/user')

const checkToken = (req, res) => {
  res.json(req.exp)
}

const dataCtrl = {
  async create (req, res, next){
    try {
      
    } catch (error) {
      
    }
  }, 
  async login (req, res, next) {
    try {
      
    } catch (error) {
      
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