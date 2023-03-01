// import model 
const Profile = require('../models/profile')


const dataCtrl = {
  // Index
  Index(req, res, next){
    Profile.find({}, (err, foundProfile) => {
      if (err){
        res.status(400).send({
        msg: err.message
        })
      } else {
        res.locals.data.profile = foundProfile
        next()
      }
    })
  }
  // update
  // delete 
  // show 

}



const apiCtrl = {
  // index
  index (req, res, next) {
    res.json(res.locals.data.profiles)
  },
  show (req, res, next){
    res.json(res.locals.data.profile)
  }
  // show 
}

module.exports = { dataCtrl, apiCtrl }